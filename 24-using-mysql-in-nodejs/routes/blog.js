const express = require('express');

const db = require('../data/database');

const router = express.Router();

router.get('/', function (req, res) {
  res.redirect('/posts');
});

// 전체post 조회
router.get('/posts', async function (req, res) {
  const query = `
    SELECT posts.*, authors.name AS author_name FROM posts 
    INNER JOIN authors ON posts.author_id = authors.id
  `;
  const [posts] = await db.query(query);
  res.render('posts-list', { posts: posts });
});

router.get('/new-post', async function (req, res) {
  const [authors] = await db.query('SELECT * FROM authors');
  res.render('create-post', { authors: authors });
});

// 신규post edit
router.post('/posts', async function (req, res) {
  const data = [req.body.title, req.body.summary, req.body.content, req.body.author];
  await db.query('INSERT INTO posts (title, summary, body, author_id) VALUES (?)', [data]);
  res.redirect('/posts');
});

// 개별post 조회
router.get('/posts/:id', async function (req, res) {
  const query = `
    SELECT posts.*, authors.name AS author_name, authors.email AS author_email FROM posts
    INNER JOIN authors ON posts.author_id = authors.id
    WHERE posts.id = ?
  `;

  const [posts] = await db.query(query, [req.params.id]);

  if (!posts || posts.length === 0) {
    return res.status(404).render('404');
  }

  // 사용자가 시간을 보기좋게 출력
  const postData = {
    ...posts[0],
    date: posts[0].date.toISOString(),
    humanReadableDate: posts[0].date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
  };

  res.render('post-detail', { post: postData });
});

// edit전 개별포스트 조회
router.get('/posts/:id/edit', async function (req, res) {
  const query = `
  SELECT * FROM posts WHERE id = ?
  `;
  const [posts] = await db.query(query, [req.params.id]);

  if (!posts || posts.length === 0) {
    return res.status(404).render('404');
  }

  res.render('update-post', { post: posts[0] });
});

// update
router.post('/posts/:id/edit', async function (req, res) {
  const query = `
    UPDATE posts SET title = ?, summary = ?, body = ?
    WHERE id = ?
  `;

  await db.query(query, [req.body.title, req.body.summary, req.body.content, req.params.id]);

  res.redirect('/posts');
});

// delete
router.post('/posts/:id/delete', async function (req, res) {
  await db.query('DELETE FROM posts WHERE id = ?', [req.params.id]);
  res.redirect('/posts');
});

module.exports = router;

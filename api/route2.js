const express = require('express')

// express 인스턴스 생성
const app = express()

const router = express.Router();

// 실제로는 /api 라우트를 처리하는 메소드가 된다.
router.route('/').get(function (req, res) {
  console.log('index2');
  res.send('222');
})

// 모듈로 사용할 수 있도록 export
// 앱의 /api/* 라우트로 접근하는 모든 요청은 모두 app 인스턴스에게 전달된다.
module.exports = router;

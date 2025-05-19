// main.js

document.getElementById('gotoBtn').addEventListener('click', function () {
  if (confirm('別ページに移動してよろしいですか？')) {
    location.href = 'https://example.com'; // 実際の遷移先
  }
});
//       <button onclick="alert('別ページに移動してよろしいですか?')"></button>

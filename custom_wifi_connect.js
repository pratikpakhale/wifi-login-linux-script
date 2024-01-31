const callApi = async (url, body) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Referer: 'http://172.16.16.16:8090/httpclient.html',
        Origin: 'http://172.16.16.16:8090',
        Host: '172.16.16.16:8090',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: body,
    });
    const result = await response.text();
    return result;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

const handleLogin = async (username, password) => {
  const loginUrl = 'http://172.16.16.16:8090/login.xml';
  const requestBody = new URLSearchParams();
  requestBody.append('mode', '191');
  requestBody.append('username', username);
  requestBody.append('password', password);
  requestBody.append('a', Date.now().toString());
  requestBody.append('producttype', '0');

  try {
    const result = await callApi(loginUrl, requestBody.toString());
    console.log(result);
  } catch (error) {
    console.log(error?.message);
    console.log('Error occurred during login.');
    return false;
  }
};

handleLogin('21bcs085', '*******');

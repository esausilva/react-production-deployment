export function handler(event, context, callback) {
  const body = JSON.parse(event.body);

  callback(null, {
    statusCode: 200,
    body: `I received your POST request. This is what you sent me: ${
      body.post
    }`,
  });
}

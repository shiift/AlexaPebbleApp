TOKEN=$(node index.js)

curl \
  -H "Authorization: Bearer ${TOKEN}" \
  -F "metadata=<metadata.json;type=application/json; charset=UTF-8" \
  -F "audio=<hello.wav;type=audio/L16; rate=16000; channels=1" \
  -o response.txt \
  https://access-alexa-na.amazon.com/v1/avs/speechrecognizer/recognize

cat response.txt | /usr/local/bin/http-message-parser --pick="multipart[1].body" | mpg123 -

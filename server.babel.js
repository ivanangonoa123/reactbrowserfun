import express from 'express';

const app = express();

app.use('/', express.static('public'));

app.listen(process.env.PORT || 3000, function(error){
  if (error) {console.info("hahahahahhaahaha GAME OVER")}
  else {
    console.info("listening in port hardcoded as 3000");
  }
});

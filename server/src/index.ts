// use interfaces for objects and types for anything else
import express from 'express';

const app = express();

const PORT = 4001;

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});

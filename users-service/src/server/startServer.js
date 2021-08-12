import cors from 'cors';
import express from 'express';

import getEnv from '#root/helpers/getEnv';

const PORT = getEnv('PORT', 7101);

const app = express();

app.use(
  cors({
    origin: (origin, cb) => cb(null, true),
    credentials: true,
  })
);

// idk if i need to do the 0.0.0.0 thing
app.listen(PORT, '0.0.0.0', () =>
  console.log(`Users service listening on ${PORT}.`)
);

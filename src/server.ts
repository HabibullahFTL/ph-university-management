import 'dotenv/config';
import mongoose from 'mongoose';
import app from './app';

async function main() {
  try {
    // Establish db connection
    await mongoose.connect(process.env.DATABASE_URL as string);

    // Listening the app
    app.listen(process.env.PORT, () => {
      console.log(`Application listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();

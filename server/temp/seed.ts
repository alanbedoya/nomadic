require('dotenv').config();

import { ObjectId } from 'mongodb';
import { connectDatabase } from '../src/db';
import { Listing } from '../src/lib/types';

const seed = async () => {
  try {
    console.log(`[seed] : running...`);

    const db = await connectDatabase();
    const listings: Listing[] = [
      {
        _id: new ObjectId(),
        title: 'Clean and fully furnished apartment. 5 min away from CN Tower',
        image:
          'https://res.cloudinary.com/tiny-house/image/upload/v1560641352/mock/Toronto/toronto-listing-1_exv0tf.jpg',
        address: '6667 Scotchmere Dr W, Toronto, ON, CA',
        price: 10000,
        numOfGuests: 2,
        numOfBeds: 1,
        numOfBaths: 2,
        rating: 5,
      },
      // ...
    ];

    for (const listing of listings) {
      await db.listings.insertOne(listing);
    }

    console.log(`[seed] : success`);
  } catch (error) {
    throw new Error('failed to seed database');
  }
};

seed();

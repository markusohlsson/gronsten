// contentfulClient.js

import * as contentful from 'contentful';
import { VITE_CONTENTFUL_SPACE, VITE_CONTENTFUL_ACCESS_TOKEN } from 'dotenv';

const client = contentful.createClient({
    space: import.meta.env.VITE_CONTENTFUL_SPACE,
    accessToken: import.meta.env.VITE_CONTENTFUL_ACCESSTOKEN
  });

export default client;

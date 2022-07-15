import greenImage from '../assets/producers/green.png';
import growImage from '../assets/producers/grow.png';
import jennyJackImage from '../assets/producers/jenny-jack.png';
import potagerImage from '../assets/producers/potager.png';
import saladImage from '../assets/producers/salad.png';

import { faker } from '@faker-js/faker';

export const ProducersMock = {
  title: 'Produtores',
  list: [
    {
      name: 'Green',
      image: greenImage,
      distance: `${faker.datatype.number({ min: 1, max: 500 })}`,
      evaluation: faker.datatype.number({ min: 1, max: 5 }),
    },
    {
      name: 'Salad',
      image: saladImage,
      distance: `${faker.datatype.number({ min: 1, max: 500 })}`,
      evaluation: faker.datatype.number({ min: 1, max: 5 }),
    },
    {
      name: 'Jenny Jack Farm',
      image: jennyJackImage,
      distance: `${faker.datatype.number({ min: 1, max: 500 })}`,
      evaluation: faker.datatype.number({ min: 1, max: 5 }),
    },
    {
      name: 'Grow',
      image: growImage,
      distance: `${faker.datatype.number({ min: 1, max: 500 })}`,
      evaluation: faker.datatype.number({ min: 1, max: 5 }),
    },
    {
      name: 'Potager',
      image: potagerImage,
      distance: `${faker.datatype.number({ min: 1, max: 500 })}`,
      evaluation: faker.datatype.number({ min: 1, max: 5 }),
    },
  ],
};

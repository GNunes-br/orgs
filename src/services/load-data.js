import { HeaderMock, ProducersMock } from '../mocks';

export const loadHeader = () => {
  const { welcome_text, subtitle } = HeaderMock;
  return {
    welcomeText: welcome_text,
    subtitle,
  };
};

export const loadProducers = () => {
  return ProducersMock;
};

import supertest from 'supertest';
import app from '../../src/index';

describe('App', () => {
  it('should return hello world', async () => {
    const { text, status } = await supertest(app).get('/');
    expect(status).toBe(200);
    expect(text).toBe('Hello world');
  });
});

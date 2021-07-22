import axios from 'axios';

describe('Api data', () => {
  it('Tests if Measurements data is received', async () => {
    const url = 'https://tracking-app-be-zil.herokuapp.com/api/v1/measurements';
    const data = await axios.get(url).then((res) => res);
    expect(data).toBeInstanceOf(Object);
  });

  it('Tests if Measurement data is posted', async () => {
    const url = 'https://tracking-app-be-zil.herokuapp.com/api/v1/measurements';
    const payload = {
      measurement: {
        id: 5,
      },
      measure: {
        data: 17.17,
      },
    };
    const data = await axios.post(url, payload).then((res) => res);

    expect(data).toBeInstanceOf(Object);
  });
});

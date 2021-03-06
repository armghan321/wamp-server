import { expect } from 'chai';
import { incomingChannel, outgoingChannel} from '../../src/protocols';

describe('protocols', () => {
  it('Should match incomingChannel', () => {
    const INCOMMING_CHANNEL = {
      1: 'HELLO',
      2: 'WELCOME',
      3: 'ABORT',
      4: 'CHALLENGE',
      5: 'AUTHENTICATE',
      6: 'GOODBYE',
      7: 'HEARTBEAT',
      8: 'ERROR',
      16: 'PUBLISH',
      17: 'PUBLISHED',
      32: 'SUBSCRIBE',
      33: 'SUBSCRIBED',
      34: 'UNSUBSCRIBE',
      35: 'UNSUBSCRIBED',
      36: 'EVENT',
      48: 'CALL',
      49: 'CANCEL',
      50: 'RESULT',
      64: 'REGISTER',
      65: 'REGISTERED',
      66: 'UNREGISTER',
      67: 'UNREGISTERED',
      68: 'INVOCATION',
      69: 'INTERRUPT',
      70: 'YIELD',
    };
    expect(INCOMMING_CHANNEL).deep.equal(incomingChannel);
  });

  it('Should match outgoingChannel', () => {
    const OUTGOING_CHANNEL = {
      ABORT: 3,
      AUTHENTICATE: 5,
      CALL: 48,
      CANCEL: 49,
      CHALLENGE: 4,
      ERROR: 8,
      EVENT: 36,
      GOODBYE: 6,
      HEARTBEAT: 7,
      HELLO: 1,
      INTERRUPT: 69,
      INVOCATION: 68,
      PUBLISH: 16,
      PUBLISHED: 17,
      REGISTER: 64,
      REGISTERED: 65,
      RESULT: 50,
      SUBSCRIBE: 32,
      SUBSCRIBED: 33,
      UNREGISTER: 66,
      UNREGISTERED: 67,
      UNSUBSCRIBE: 34,
      UNSUBSCRIBED: 35,
      WELCOME: 2,
      YIELD: 70,
    };
    expect(OUTGOING_CHANNEL).deep.equal(outgoingChannel);
  });
});

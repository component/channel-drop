
# channel-drop

Drop middleware for [channel](https://github.com/component/channel).

A percentage of emitted events will not be delivered on the other endpoint.

Useful for simulating connectivity issues.

```
// 5% of all events will be dropped
chan.use(drop(0.05));
```

## Installation

  Install with [component(1)](http://component.io):

    $ component install component/channel-drop

## API

### drop(rate)

Create a drop middleware, with the specified drop `rate`.

`rate` is a real number between 0 and 1. 0 means no events are dropped, 1 means all events are dropped.

## License

  The MIT License (MIT)

  Copyright (c) 2014 Automattic, Inc.

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.

```js
import { useState } from 'react';
const [value, setValue] = useState(50);
<Slider
  min={0}
  max={500}
  step={1}
  orientation="horizontal"
  bgThumb="primary"
  value={value}
  onChange={(e) => setValue(e.target.value)}
  full
/>;
```

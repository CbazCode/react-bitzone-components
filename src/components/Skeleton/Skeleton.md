```js
import { useState } from 'react';
<div>
  <Skeleton height={20} />
  {/* Circulo al lado de parrafo */}
  <div style={{ display: 'flex', width: '100%' }}>
    <Skeleton type="CIRCLE" size={5} />
    <div style={{ width: '100%' }}>
      <Skeleton height={20} />
      <Skeleton height={20} />
    </div>
  </div>
  {/* Skeleton con texto */}
  <Skeleton>
    <h1>text</h1>
    <h1>text</h1>
    <h1>text</h1>
  </Skeleton>
 
  
</div>;
```

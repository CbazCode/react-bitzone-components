```js
import { useState } from 'react';
<div style={{display:'flex', flexDirection:'column'}}>
  {/* Input por defecto */}
  <Input placeholder="Escribe aqui!" type="email" />
  {/* Input con background y color */}
  <Input bgColor="accent" color="white" placeholder="Escribe aqui!" type="email" />
  {/* input con size establecido */}
  <Input size="xl" bgColor="success" color="white" placeholder="Escribe aqui!" type="email" />
  {/* input con sombras */}
  <Input isShadow bgColor="warning" color="white" placeholder="Escribe aqui!" type="email" />
  {/* input con border radius */}
  <Input rounded="full" bgColor="primary" color="white" placeholder="Escribe aqui!" type="email" />
  {/* input deshabilitado */}
  <Input isDisabled bgColor="danger" color="white" placeholder="Escribe aqui!" type="email" />
  {/* input con outline */}
  <Input outliner outlinerColor="danger" bgColor="danger" placeholder="Escribe aqui!" type="email" />
</div>;
```

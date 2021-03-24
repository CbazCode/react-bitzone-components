import { useState } from 'react';
import './app.css';
import { Button, Modal, Skeleton, Slider, Switch } from './components';
// import sourceImage from './components/Modal/modal.jpg'
import { ModalBody, ModalHeader } from './components/Modal/ModalElements';
import useModal from './components/Modal/modalHook';

function App() {


  const {showModal, openModal, setShowModal} = useModal();
  const [value, setValue] = useState(5);

  return (
    <>
      {/* EJEMPLO SKELETON */}
      <div className="container">
        {/* Linea individual */}
        <Skeleton height="20px" />
        {/* Skeleton con texto */}
        <Skeleton>
          <h1>text</h1>
          <h1>text</h1>
          <h1>text</h1>
        </Skeleton>

        {/* circulo con parametros */}
        <Skeleton type="CIRCLE" size={5} />
        {/* Circulo sin parametros */}
        <Skeleton type="CIRCLE" />

        {/* Circulo al lado de parrafo */}
        <div style={{ display: 'flex', width: '100%' }}>
          <Skeleton type="CIRCLE" size={5} />
          <div style={{ width: '100%' }}>
            <Skeleton height="20px" />
            <Skeleton height="20px" />
          </div>
        </div>
        <Button
          bgColor="red"
          color="white"
          isShadow={true}
          size="sm"
          rounded="full"
          isDisabled
          full
          outliner={true}
          outlinerColor="purple"
        >
          Button
        </Button>
        <Button bgColor="yellow" size="md" rounded="soft" full isDisabled>
          Button
        </Button>
        <Button bgColor="green" color="white" isShadow={true} size="lg" isDisabled>
          Button
        </Button>
        <Button bgColor="blue" color="white" size="xl" rounded="full">
          Button
        </Button>
        <Button bgColor="purple" color="white" isShadow={true} size="sm" rounded="soft">
          Button
        </Button>
        <Button bgColor="indigo" isShadow={true} size="md">
          Button
        </Button>
        <Switch id="idTest" name="test" bgColor="green" defaultRight />

        <Button bgColor="red" isShadow={true} size="md" rounded="soft" onClick={openModal}>
          I'am modal
        </Button>
      
        <Modal showModal={showModal} setShowModal={setShowModal} appear="top" >
          <ModalHeader>Are you ready?</ModalHeader>
          <ModalBody>Get exclusive access to our next launch. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis minima ratione placeat facere illo fuga non id aliquam cumque molestias! </ModalBody>
          <Button bgColor="indigo" isShadow={true} size="xl" rounded="full">
            Button
          </Button>
        </Modal>
      </div>

      <div style={{ display: 'flex', width: '100%', padding: '1rem 2rem' }}>
        <Slider
          min={0}
          max={500}
          step={1}
          orientation="horizontal"
          bgThumb="indigo"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          full
        />
        <Slider
          min={0}
          max={500}
          step={1}
          orientation="vertical"
          bgThumb="blue"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <h1>{value}</h1>
      </div>
    </>
  );
}

export default App;

import React, { useState } from 'react';

import { Container, StyledSlider, StyledInputNumber, Roomate, RoomateOptions } from './styled';
import Checkbox from '../Checkbox';

const PriceSlider = ({ defaultMinValue, defaultMaxValue, onSetRange }) => {
  const [minValue, setMinValue] = useState(defaultMinValue);
  const [maxValue, setMaxValue] = useState(defaultMaxValue);
  const [roomates, setRoomates] = useState(false);

  const marks = [minValue, maxValue].reduce((acc, value) => ({ ...acc, [value]: `${value}$` }), {});

  const handleValueChange = ([minV, maxV]) => {
    setMinValue(minV);
    setMaxValue(maxV);
    onSetRange([minV, maxV]);
  };

  const handleInputMinValue = value => {
    setMinValue(value);
  };
  const handleInputMaxValue = value => {
    setMaxValue(value);
  };

  return (
    <Container>
      <div>
        <p>Precio</p>

        <div className='inputs'>
          <label htmlFor=''>Mínimo</label>
          <StyledInputNumber value={minValue} onChange={handleInputMinValue} />
          <label htmlFor=''>Máximo</label>
          <StyledInputNumber value={maxValue} onChange={handleInputMaxValue} />
        </div>

        <StyledSlider
          range
          marks={marks}
          min={defaultMinValue}
          max={defaultMaxValue}
          defaultValue={[0, 9000]}
          onChange={handleValueChange}
        />
      </div>
  
      <Roomate>
        <p>Roomate</p>
        <RoomateOptions>
          <div>
            <Checkbox checked={roomates} onClick={() => setRoomates(true)}/>
            <span className='m4'>Si</span>
          </div>
          <div>
            <Checkbox checked={!roomates} onClick={() => setRoomates(false)}/>
            <span className='m4'>No</span>
          </div>
        </RoomateOptions>
      </Roomate>
    </Container>
  );
};

export default PriceSlider;

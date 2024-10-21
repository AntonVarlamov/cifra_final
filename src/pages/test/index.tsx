import { FC } from 'react';

import Select from '../../components/Select';

export const Test: FC = () => {
  return (
    <div>
      <Select
        label="dsadsadsa"
        options={[
          { value: '11', label: '11' },
          { value: '22', label: '22' },
          { value: '33', label: '33' },
        ]}
        value="dsadsa"
        onChange={() => {}}
      />
    </div>
  );
};

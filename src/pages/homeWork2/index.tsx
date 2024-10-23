import React, { FC} from 'react';
import ButtomSheetComponent from '../../components/ButtomSheet';

export const HomeWork2: FC = () => {
  return (
    <div>
      <ButtomSheetComponent  label='Информация о БО' labelDown='Отображать доп. информацию о БО' isOpen={true} checked={true} option={
            [   
                "Перервод с НеУтв на Принят",
                "Перервод с НеУтв на Утв",
                "Перервод с НеУтв на 1С"
            ]
        } ></ButtomSheetComponent>
    </div>
  );
};

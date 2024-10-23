import React, {useState, useEffect, FC} from 'react';

import IconAdd from '../../assets/add.svg?react';
import IconBack from '../../assets/back.svg?react';
import IconChange from '../../assets/change.svg?react';
import IconClose from '../../assets/close.svg?react';
import IconDrowdownOpen from '../../assets/drowdown-open.svg?react';
import IconDrowdown from '../../assets/drowdown.svg?react';
import IconDrowdownSqureOpen from '../../assets/drowdownSqure-open.svg?react';
import IconDrowdownSqure from '../../assets/drowdownSqure.svg?react';
import IconEdit from '../../assets/edit.svg?react';
import IconFactory from '../../assets/factory.svg?react';
import IconForder from '../../assets/folderinput.svg?react';
import IconInfoActive from '../../assets/info-active.svg?react';
import IconInfo from '../../assets/info.svg?react';
import IconMenu from '../../assets/menu.svg?react';
import IconMoreInactive from '../../assets/more-inactive.svg?react';
import IconMore from '../../assets/more.svg?react';
import IconScanActive from '../../assets/scan-active.svg?react';
import IconScan from '../../assets/scan.svg?react';
import IconSettings from '../../assets/settings.svg?react';
import IconSome from '../../assets/some_icon.svg?react';
import IconSort from '../../assets/sort.svg?react';
import IconTask from '../../assets/tasks.svg?react';
import IconWarehouse from '../../assets/warehouse.svg?react';
import ButtonFiltersComponent from '../../components/ButtonFilters';
import ButtonIconComponent from '../../components/ButtonIcon';
import CheckboxComponent from '../../components/Checkbox';
import InputComponent from '../../components/Input';
import LineComponent from '../../components/LabelComponent';
import ListItemComponent from '../../components/ListItemComponent';
import ListComponent from '../../components/ListItem';
import MenuComponent from '../../components/Menu';
import Pagination from '../../components/Pagination';
import InfoBox from '../../components/SearchCard';

export const Test: FC = () => {
  const handleClick = () => {
    console.log('Кнопка нажата!');
  };
  const [currentPage, setCurrentPage] = useState<number>(2);
  const [itemsPerPage, setItemsPerPage] = useState<number>(5);
  const [isChecked1, setIsChecked1] = useState(true);
  const [isChecked2, setIsChecked2] = useState(false);
  const [totalItems, setTotalItems] = useState<number>(100);

  useEffect(() => {
    const calculateItemsPerPage = () => {
      if (typeof window !== 'undefined') {
        const width = Math.floor(window.innerWidth / 335);
        const height = Math.floor(window.innerHeight / 430);

        setItemsPerPage(5);
      }
    };

    calculateItemsPerPage();
    window.addEventListener('resize', calculateItemsPerPage);

    return () => window.removeEventListener('resize', calculateItemsPerPage);
  }, []);
  const handleSearch = () => {
    console.log('Поиск выполнен!');
  };
  const handleMore = () => {
    console.log('Тут будет доп инфа');
  };
  const handleCancel = () => {
    console.log('Отмена выполнена!');
  };
  // const totalPages = Math.ceil(totalItems / itemsPerPage);
  const totalPages = 3;

  return (
    <div>
      <ListComponent
        name="ВЗН №132313"
        sender="Цех 01 / участок Цеха 01"
        comer="Цех 02 / участок Цеха 02"
        date="15.06.2024"
      />
      <ListItemComponent
        name="ВЗН №132313"
        sender="Цех 01 / участок Цеха 01"
        comer="Цех 02 / участок Цеха 02"
        date="15.06.2024"
      />

      <InputComponent placeholder="Введите текст здесь" label="Ваш текст" required={1} />
      <InputComponent
        placeholder="Другой текст"
        label="Необязательный текст"
        required={0}
      />
      <ButtonFiltersComponent onSearch={handleSearch} onCancel={handleCancel} text ={'Поиск'}/>
      <LineComponent label="Разделитель" />
      <ButtonIconComponent text="Поиск" onClick={handleClick} />
      <CheckboxComponent id="checkbox1" checked={isChecked1} onChange={setIsChecked1} />
      <CheckboxComponent id="checkbox2" checked={isChecked2} onChange={setIsChecked2} />
      <div style={{ backgroundColor: 'grey' }}>
        <IconTask />
        <IconSettings />
        <IconInfo />
        <IconInfoActive />
        <IconFactory />
        <IconWarehouse />
        <IconBack />
        <IconScan />
        <IconScanActive />
        <IconMore />
        <IconMoreInactive />
        <IconClose />
        <IconEdit />
        <IconAdd />
        <IconChange />
        <IconSort />
        <IconMenu />
        <IconDrowdown />
        <IconDrowdownOpen />
        <IconDrowdownSqure />
        <IconDrowdownSqureOpen />
        <IconSome />
        <IconForder />
      </div>
      <LineComponent label="Разделитель2" />
      <InfoBox
        mainText="Text Text Text Text"
        additionalText="Поиск карточки (шаг 1)"
        onClose={handleCancel}
        More={handleMore}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => {
          setCurrentPage(page);
        }}
      />

      <MenuComponent />
    </div>
  );
};

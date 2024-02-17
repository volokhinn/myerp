import React from 'react';
import Image from 'next/image';
import styles from './sidebar.module.scss';
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from 'react-icons/md';
import MenuLink from './MenuLink/MenuLink';

const menuItems = [
  {
    title: 'Страницы',
    list: [
      {
        title: 'Панель управления',
        path: '/dashboard',
        icon: <MdDashboard />,
      },
      {
        title: 'Пользователи',
        path: '/dashboard/users',
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: 'Транзакции',
        path: '/dashboard/transactions',
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: 'Аналитика',
    list: [
      {
        title: 'Проекты',
        path: '/dashboard/projects',
        icon: <MdShoppingBag />,
      },
      {
        title: 'Задачи',
        path: '/dashboard/tasks',
        icon: <MdAnalytics />,
      },
      {
        title: 'Команды',
        path: '/dashboard/teams',
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: 'Пользователь',
    list: [
      {
        title: 'Настройки',
        path: '/dashboard/settings',
        icon: <MdOutlineSettings />,
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image src="/noavatar.png" alt="" width={50} height={50} className={styles.user__image} />
        <div className={styles.user__detail}>
          <span className={styles.user__name}>Nikita</span>
          <span className={styles.user__role}>Администратор</span>
        </div>
      </div>
      <ul className={styles.list}>
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className={styles.cat}>{cat.title}</span>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

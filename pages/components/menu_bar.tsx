import React from 'react';
import { Button, Link } from '@material-ui/core';

type MenuItem = {
  name: string
  href: string
}

const menuItems: MenuItem[] = [
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Book", href: "/book" },
  { name: "Locations", href: "/locations" },
  { name: "Contact Us", href: "/contact_us" },
];

const MenuBar = () => (
  < div style={{ display: 'flex', justifyContent: 'center' }}>
    {
      menuItems.map((menuItem) => (
        <Link href={menuItem.href}>
          <Button>
            {menuItem.name}
          </Button>
        </Link>
      ))
    }
  </div >
)

export default MenuBar;
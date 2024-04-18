import React from 'react';
import { Box, Breadcrumbs, Link } from '@mui/material';
import { NavigateNext } from '@mui/icons-material';
import { usePathname } from 'next/navigation';

// interface BreadcrumbProps {
//   path: string;
//   name: string;
// }

const CustomBreadcrumbs: React.FC = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter(Boolean);

  return (
    <Box sx={{ mt: 12 }}>
      <Breadcrumbs separator={<NavigateNext fontSize='small' />}>
        {pathSegments.map((segment, index) => {
          const path = `/${pathSegments.slice(0, index + 1).join('/')}`;
          const name = segment.charAt(0).toUpperCase() + segment.slice(1);
          const isLast = index === pathSegments.length - 1;
          return (
            <Link
              key={path}
              underline='hover'
              color={isLast ? 'text.primary' : 'inherit'}
              href={isLast ? '' : path}
            >
              {name}
            </Link>
          );
        })}
      </Breadcrumbs>
    </Box>
  );
};

export default CustomBreadcrumbs;

import React from "react";
import { usePathname } from "next/navigation";
import { Breadcrumbs as MyBreadcrumbs, useTheme } from "@mui/material/";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

interface BreadcrumbsProps {
  currentPageName: string;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ currentPageName }) => {
  const pathname = usePathname();
  const style = useTheme();

  const routeParts = pathname.split("/").filter(Boolean);

  const currentPage = routeParts[routeParts.length - 1];

  const formattedCurrentPage = currentPage
    ? currentPage.charAt(0).toUpperCase() + currentPage.slice(1).replace(/-/g, " ")
    : "";

  const lastPage = routeParts[routeParts.length - 2];

  const formattedLastPage = lastPage ? lastPage.charAt(0).toUpperCase() + lastPage.slice(1).replace(/-/g, " ") : "";

  return (
    <MyBreadcrumbs
      separator={<NavigateNextIcon fontSize='small' />}
      aria-label='breadcrumb'
      sx={{ "& ol": { flexWrap: "wrap" }, color: style.palette.primary.main, marginBottom: "36px" }}
    >
      {formattedLastPage && (
        <Link color={style.palette.primary.main} href={`/${lastPage}`}>
          {formattedLastPage}
        </Link>
      )}
      {formattedCurrentPage && <Typography color='text.primary'>{currentPageName}</Typography>}
    </MyBreadcrumbs>
  );
};

export default Breadcrumbs;

import React from "react";
import { Link } from "react-router-dom";
import { TreeView, TreeItem } from "@material-ui/lab";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {
  FaBorderAll,
  FaChartLine,
  FaListAlt,
  FaRegPlusSquare,
  FaRocketchat,
  FaSitemap,
  FaUsers,
} from "react-icons/fa";
const Sidebar = () => {
  return (
    <div className="w-full bg-white py-24 flex flex-col gap-10 h-full px-10 sticky top-0 left-0">
      <Link
        className="sidebarLinkStyles text-lg border-b-2 flex gap-2 flex-box"
        to="/admin/dashboard"
      >
        <FaChartLine />
        <p>Bảng điều khiển</p>
      </Link>
      <Link
        className="sidebarLinkStyles text-lg border-b-2 flex gap-2 flex-box"
        to="#"
      >
        <TreeView
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<FaSitemap />}
        >
          <TreeItem className="gap-3 text-xl" nodeId="1" label="Sản phẩm">
            <Link className="sidebarLinkStyles text-lg" to="/admin/products">
              <TreeItem
                nodeId="2"
                label="Tất cả"
                icon={<FaBorderAll className="h-8 text-xl" />}
              />
            </Link>

            <Link className="sidebarLinkStyles text-lg" to="/admin/product">
              <TreeItem nodeId="3" label="Thêm" icon={<FaRegPlusSquare />} />
            </Link>
          </TreeItem>
        </TreeView>
      </Link>
      <Link
        className="sidebarLinkStyles text-lg border-b-2 flex gap-2 flex-box"
        to="/admin/orders"
      >
        <FaListAlt />
        <p>Đơn hàng</p>
      </Link>
      <Link
        className="sidebarLinkStyles text-lg border-b-2 flex gap-2 flex-box"
        to="/admin/users"
      >
        <FaUsers />
        <p>Người dùng</p>
      </Link>
      <Link
        className="sidebarLinkStyles text-lg border-b-2 flex gap-2 flex-box"
        to="/admin/reviews"
      >
        <FaRocketchat />
        <p>Đánh giá</p>
      </Link>
    </div>
  );
};

export default Sidebar;

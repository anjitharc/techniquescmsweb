import React, { lazy } from 'react';

// project import
import MainLayout from 'layout/MainLayout';
import AuthGuard from 'component/Auth/AuthGuard';
import Loadable from 'component/Loadable';
import ClosedLead from 'views/Lead/OtherLead';



const DashboardDefault = Loadable(lazy(() => import('../views/Dashboard/Default')));

const WidgetStatistic = Loadable(lazy(() => import('../views/Widget/Statistic')));
const WidgetData = Loadable(lazy(() => import('../views/Widget/Data')));
const WidgetChart = Loadable(lazy(() => import('../views/Widget/Chart')));

const RtlLayout = Loadable(lazy(() => import('../views/RtlLayout')));

const UserCard = Loadable(lazy(() => import('../views/User/Card')));
const UserAccount = Loadable(lazy(() => import('../views/User/Account')));

const UserList = Loadable(lazy(() => import('../views/AdminTable/UserTable')));
const UserProfile = Loadable(lazy(() => import('../views/User/Profile')));
const UserSocialProfile = Loadable(lazy(() => import('../views/User/Socialprofile')));

const EcommerceAccount = Loadable(lazy(() => import('../views/Application/Ecommerce/Account')));
const EcommerceProduct = Loadable(lazy(() => import('../views/Application/Ecommerce/Product')));
const EcommerceCustomerlist = Loadable(lazy(() => import('../views/Application/Ecommerce/Customerlist')));
const EcommerceOrderlist = Loadable(lazy(() => import('../views/Application/Ecommerce/Orderlist')));
const EcommerceOrderdetails = Loadable(lazy(() => import('../views/Application/Ecommerce/Orderdetails')));
const EcommerceAddProduct = Loadable(lazy(() => import('../views/Application/Ecommerce/Addproduct')));
const EcommerceProductReview = Loadable(lazy(() => import('../views/Application/Ecommerce/Productreview')));


//customer
const CreateCustomer = Loadable(lazy(() => import('../views/Customer/CreateCustomer')));
const ListCustomer = Loadable(lazy(() => import('../views/Customer/ListCustomer')));


const ContactsCard = Loadable(lazy(() => import('../views/Application/Contacts/Card')));

const Mail = Loadable(lazy(() => import('../views/Application/Mail')));
const Chat = Loadable(lazy(() => import('../views/Application/Chat')));

const FullCalendar = Loadable(lazy(() => import('../views/Application/FullCalendar')));

const Price1 = Loadable(lazy(() => import('../views/Application/Price/Price1')));
const Price2 = Loadable(lazy(() => import('../views/Application/Price/Price2')));
const Price3 = Loadable(lazy(() => import('../views/Application/Price/Price3')));

const BasicUIAccordion = Loadable(lazy(() => import('../views/Elements/Basic/UIAccordion')));
const BasicUIAvatar = Loadable(lazy(() => import('../views/Elements/Basic/UIAvatar')));
const BasicUIBadges = Loadable(lazy(() => import('../views/Elements/Basic/UIBadges')));
const BasicUIBreadcrumb = Loadable(lazy(() => import('../views/Elements/Basic/UIBreadcrumb')));
const BasicUICards = Loadable(lazy(() => import('../views/Elements/Basic/UICards')));
const BasicUIChip = Loadable(lazy(() => import('../views/Elements/Basic/UIChip')));
const BasicUIList = Loadable(lazy(() => import('../views/Elements/Basic/UIList')));
const BasicUITabs = Loadable(lazy(() => import('../views/Elements/Basic/UITabs')));

const AdvanceUIAlert = Loadable(lazy(() => import('../views/Elements/Advance/UIAlert')));
const AdvanceUIDialog = Loadable(lazy(() => import('../views/Elements/Advance/UIDialog')));
const AdvanceUIPagination = Loadable(lazy(() => import('../views/Elements/Advance/UIPagination')));
const AdvanceUIProgress = Loadable(lazy(() => import('../views/Elements/Advance/UIProgress')));
const AdvanceUIRating = Loadable(lazy(() => import('../views/Elements/Advance/UIRating')));
const AdvanceUISnackbar = Loadable(lazy(() => import('../views/Elements/Advance/UISnackbar')));
const AdvanceUISpeeddial = Loadable(lazy(() => import('../views/Elements/Advance/UISpeeddial')));
const AdvanceUITimeline = Loadable(lazy(() => import('../views/Elements/Advance/UITimeline')));
const AdvanceUIToggleButton = Loadable(lazy(() => import('../views/Elements/Advance/UIToggleButton')));
const AdvanceUITreeview = Loadable(lazy(() => import('../views/Elements/Advance/UITreeview')));

const FrmAutocomplete = Loadable(lazy(() => import('../views/Forms/FrmAutocomplete')));
const FrmButton = Loadable(lazy(() => import('../views/Forms/FrmButton')));
const FrmCheckbox = Loadable(lazy(() => import('../views/Forms/FrmCheckbox')));
const FrmDatetime = Loadable(lazy(() => import('../views/Forms/FrmDatetime')));
const FrmListbox = Loadable(lazy(() => import('../views/Forms/FrmListbox')));
const FrmRadio = Loadable(lazy(() => import('../views/Forms/FrmRadio')));
const FrmSelect = Loadable(lazy(() => import('../views/Forms/FrmSelect')));
const FrmSlider = Loadable(lazy(() => import('../views/Forms/FrmSlider')));
const FrmSwitch = Loadable(lazy(() => import('../views/Forms/FrmSwitch')));
const FrmTextField = Loadable(lazy(() => import('../views/Forms/FrmTextField')));

const TableBasic = Loadable(lazy(() => import('../views/Tables/TableBasic')));
const DenseTable = Loadable(lazy(() => import('../views/Tables/DenseTable')));
const EnhancedTable = Loadable(lazy(() => import('../views/Tables/EnhancedTable')));
const DataTable = Loadable(lazy(() => import('../views/Tables/DataTable')));
const CustomizedTables = Loadable(lazy(() => import('../views/Tables/CustomizedTables')));
const StickyHeadTable = Loadable(lazy(() => import('../views/Tables/StickyHeadTable')));
const CollapsibleTable = Loadable(lazy(() => import('../views/Tables/CollapsibleTable')));

const MUITableSimple = Loadable(lazy(() => import('../views/MUIDatatables/simple')));
const MUITableColumnFilters = Loadable(lazy(() => import('../views/MUIDatatables/column-filters')));
const MUITableColumnOptionsUpdate = Loadable(lazy(() => import('../views/MUIDatatables/column-options-update')));
const MUITableColumnSort = Loadable(lazy(() => import('../views/MUIDatatables/column-sort')));
const MUITableColumnComponent = Loadable(lazy(() => import('../views/MUIDatatables/component')));
const MUITableCSVExport = Loadable(lazy(() => import('../views/MUIDatatables/csv-export')));
const MUITableCustomActionColumn = Loadable(lazy(() => import('../views/MUIDatatables/custom-action-columns')));
const MUITableCustomComponents = Loadable(lazy(() => import('../views/MUIDatatables/custom-components')));
const MUITableCustomizeColumns = Loadable(lazy(() => import('../views/MUIDatatables/customize-columns')));
const MUITableCustomizeFilter = Loadable(lazy(() => import('../views/MUIDatatables/customize-filter')));
const MUITableDraggableColumns = Loadable(lazy(() => import('../views/MUIDatatables/draggable-columns')));
const MUITableExpandableRows = Loadable(lazy(() => import('../views/MUIDatatables/expandable-rows')));
const MUITableFixedHeader = Loadable(lazy(() => import('../views/MUIDatatables/fixed-header')));
const MUITableResizableColumns = Loadable(lazy(() => import('../views/MUIDatatables/resizable-columns')));
const MUITableSelectableRows = Loadable(lazy(() => import('../views/MUIDatatables/selectable-rows')));

const UtilsModal = Loadable(lazy(() => import('../views/Utils/Modal')));
const UtilsTooltip = Loadable(lazy(() => import('../views/Utils/Tooltip')));
const UtilsPopover = Loadable(lazy(() => import('../views/Utils/Popover')));
const UtilsPopper = Loadable(lazy(() => import('../views/Utils/Popper')));
const UtilsTransitions = Loadable(lazy(() => import('../views/Utils/Transitions')));
const UtilsTypography = Loadable(lazy(() => import('../views/Utils/Typography')));

const SamplePage = Loadable(lazy(() => import('../views/SamplePage')));
const MultiLanguage = Loadable(lazy(() => import('../views/MultiLanguage')));


const LeadList = Loadable(lazy(() => import('../views/Lead/LeadList')));
const ComplaintList = Loadable(lazy(() => import('../views/Complaint/ComplaintList')));
const CreateComplaint = Loadable(lazy(() => import('../views/Complaint/CreateCmp')));
const MasterSetting = Loadable(lazy(() => import('../views/Settings/MasterSetting')));



// ==============================|| MAIN ROUTES ||============================== //

const MainRoutes = {
  path: '/',
  element: (
    <AuthGuard>
      <MainLayout />
    </AuthGuard>
  ),
  children: [
    {
      path: '/dashboard/default',
      element: <DashboardDefault />
    },
    {
      path: '/widget/statistic',
      element: <WidgetStatistic />
    },
    {
      path: '/widget/data',
      element: <WidgetData />
    },
    {
      path: '/widget/chart',
      element: <WidgetChart />
    },
    { path: '/rtl', element: <RtlLayout /> },
    { path: '/user/account', element: <UserAccount /> },
    { path: '/user/card', element: <UserCard /> },
    { path: '/user/list', element: <UserList /> },
    { path: '/user/profile', element: <UserProfile /> },
    { path: '/user/socialprofile', element: <UserSocialProfile /> },
    { path: '/application/ecommerce/account', element: <EcommerceAccount /> },
    { path: '/application/ecommerce/product', element: <EcommerceProduct /> },
    { path: '/application/ecommerce/customerlist', element: <EcommerceCustomerlist /> },
    { path: '/application/ecommerce/orderlist', element: <EcommerceOrderlist /> },
    { path: '/application/ecommerce/orderdetails', element: <EcommerceOrderdetails /> },
    { path: '/application/ecommerce/addproduct', element: <EcommerceAddProduct /> },
    { path: '/application/ecommerce/productreview', element: <EcommerceProductReview /> },
   
    { path: '/application/contacts/card', element: <ContactsCard /> },
    { path: '/application/mail', element: <Mail /> },
    { path: '/application/chat', element: <Chat /> },
    { path: '/application/full-calendar', element: <FullCalendar /> },
    { path: '/application/price/price1', element: <Price1 /> },
    { path: '/application/price/price2', element: <Price2 /> },
    { path: '/application/price/price3', element: <Price3 /> },
    { path: '/basic/accordion', element: <BasicUIAccordion /> },
    { path: '/basic/avatar', element: <BasicUIAvatar /> },
    { path: '/basic/badges', element: <BasicUIBadges /> },
    { path: '/basic/breadcrumb', element: <BasicUIBreadcrumb /> },
    { path: '/basic/cards', element: <BasicUICards /> },
    { path: '/basic/chip', element: <BasicUIChip /> },
    { path: '/basic/list', element: <BasicUIList /> },
    { path: '/basic/tabs', element: <BasicUITabs /> },
    { path: '/advance/alert', element: <AdvanceUIAlert /> },
    { path: '/advance/dialog', element: <AdvanceUIDialog /> },
    { path: '/advance/pagination', element: <AdvanceUIPagination /> },
    { path: '/advance/progress', element: <AdvanceUIProgress /> },
    { path: '/advance/rating', element: <AdvanceUIRating /> },
    { path: '/advance/snackbar', element: <AdvanceUISnackbar /> },
    { path: '/advance/speeddial', element: <AdvanceUISpeeddial /> },
    { path: '/advance/timeline', element: <AdvanceUITimeline /> },
    { path: '/advance/toggle-button', element: <AdvanceUIToggleButton /> },
    { path: '/advance/treeview', element: <AdvanceUITreeview /> },
    { path: '/forms/frm-autocomplete', element: <FrmAutocomplete /> },
    { path: '/forms/frm-button', element: <FrmButton /> },
    { path: '/forms/frm-checkbox', element: <FrmCheckbox /> },
    { path: '/forms/frm-datetime', element: <FrmDatetime /> },
    { path: '/forms/frm-listbox', element: <FrmListbox /> },
    { path: '/forms/frm-radio', element: <FrmRadio /> },
    { path: '/forms/frm-select', element: <FrmSelect /> },
    { path: '/forms/frm-slider', element: <FrmSlider /> },
    { path: '/forms/frm-switch', element: <FrmSwitch /> },
    { path: '/forms/frm-text-field', element: <FrmTextField /> },
    { path: '/tables/table-basic', element: <TableBasic /> },
    { path: '/tables/dense-table', element: <DenseTable /> },
    { path: '/tables/enhanced-table', element: <EnhancedTable /> },
    { path: '/tables/data-table', element: <DataTable /> },
    { path: '/tables/customized-table', element: <CustomizedTables /> },
    { path: '/tables/sticky-header-table', element: <StickyHeadTable /> },
    { path: '/tables/collapse-table', element: <CollapsibleTable /> },
    { path: '/mui-datatables/mui-simple', element: <MUITableSimple /> },
    { path: '/mui-datatables/mui-column-filters', element: <MUITableColumnFilters /> },
    { path: '/mui-datatables/mui-column-options-update', element: <MUITableColumnOptionsUpdate /> },
    { path: '/mui-datatables/mui-component-edit', element: <MUITableColumnComponent /> },
    { path: '/mui-datatables/mui-column-sort', element: <MUITableColumnSort /> },
    { path: '/mui-datatables/mui-csv-export', element: <MUITableCSVExport /> },
    { path: '/mui-datatables/mui-custom-action-button', element: <MUITableCustomActionColumn /> },
    { path: '/mui-datatables/mui-custom-components', element: <MUITableCustomComponents /> },
    { path: '/mui-datatables/mui-customize-columns', element: <MUITableCustomizeColumns /> },
    { path: '/mui-datatables/mui-customize-filter', element: <MUITableCustomizeFilter /> },
    { path: '/mui-datatables/mui-draggable-columns', element: <MUITableDraggableColumns /> },
    { path: '/mui-datatables/mui-expandable-rows', element: <MUITableExpandableRows /> },
    { path: '/mui-datatables/mui-fixed-header', element: <MUITableFixedHeader /> },
    { path: '/mui-datatables/mui-resizable-columns', element: <MUITableResizableColumns /> },
    { path: '/mui-datatables/mui-selectable-rows', element: <MUITableSelectableRows /> },
    { path: '/utils/util-modal', element: <UtilsModal /> },
    { path: '/utils/util-tooltip', element: <UtilsTooltip /> },
    { path: '/utils/util-popover', element: <UtilsPopover /> },
    { path: '/utils/util-popper', element: <UtilsPopper /> },
    { path: '/utils/util-transitions', element: <UtilsTransitions /> },
    { path: '/utils/util-typography', element: <UtilsTypography /> },
    { path: '/sample-page', element: <SamplePage /> },
    { path: '/multi-language', element: <MultiLanguage /> },
    { path: '/complaint/listcomplaint', element: <ComplaintList /> },
    { path: '/lead/leadlist', element: <LeadList /> },
    { path: '/lead/closedlead', element: <ClosedLead /> },
    { path: '/admin/userlist', element: <UserList /> },
    { path: '/complaint/createcomplaint', element: <CreateComplaint /> },
    { path: '/customers/createcustomer', element: <CreateCustomer /> },
    { path: '/customers/listcustomer', element: <ListCustomer /> },
    { path: '/settings/mastersetting', element: <MasterSetting /> },

    
  ]
};

export default MainRoutes;

// third-party
import { FormattedMessage } from 'react-intl';

// assets
import NavigationOutlinedIcon from '@mui/icons-material/NavigationOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import FormatUnderlinedOutlinedIcon from '@mui/icons-material/FormatUnderlinedOutlined';
import GamesOutlinedIcon from '@mui/icons-material/GamesOutlined';
import LoyaltyOutlinedIcon from '@mui/icons-material/LoyaltyOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import CallToActionOutlinedIcon from '@mui/icons-material/CallToActionOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import FilterVintageOutlinedIcon from '@mui/icons-material/FilterVintageOutlined';
import FormatColorTextOutlinedIcon from '@mui/icons-material/FormatColorTextOutlined';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import BlockOutlinedIcon from '@mui/icons-material/BlockOutlined';
import ChromeReaderModeOutlinedIcon from '@mui/icons-material/ChromeReaderModeOutlined';
import GridOnOutlinedIcon from '@mui/icons-material/GridOnOutlined';
import FiberManualRecordOutlinedIcon from '@mui/icons-material/FiberManualRecordOutlined';
import EditAttributesOutlinedIcon from '@mui/icons-material/EditAttributesOutlined';
import FaceOutlinedIcon from '@mui/icons-material/FaceOutlined';
import RadioButtonUncheckedOutlinedIcon from '@mui/icons-material/RadioButtonUncheckedOutlined';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import SpeakerNotesOutlinedIcon from '@mui/icons-material/SpeakerNotesOutlined';
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';
import HourglassEmptyRoundedIcon from '@mui/icons-material/HourglassEmptyRounded';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import TranslateIcon from '@mui/icons-material/Translate';
import FormatListNumberedRtlIcon from '@mui/icons-material/FormatListNumberedRtl';
import EventNoteIcon from '@mui/icons-material/EventNote';
import DvrSharpIcon from '@mui/icons-material/DvrSharp';
import CampaignSharpIcon from '@mui/icons-material/CampaignSharp';
import SettingsIcon from '@mui/icons-material/Settings';

const icons = {
  NavigationOutlinedIcon: NavigationOutlinedIcon,
  SettingsApplicationsIcon: SettingsApplicationsIcon,
  CampaignSharpIcon: CampaignSharpIcon,
  DvrSharpIcon: DvrSharpIcon,
  SettingsIcon: SettingsIcon,
  HomeOutlinedIcon: HomeOutlinedIcon,
  FormatUnderlinedOutlinedIcon: FormatUnderlinedOutlinedIcon,
  GamesOutlinedIcon: GamesOutlinedIcon,
  LoyaltyOutlinedIcon: LoyaltyOutlinedIcon,
  ForumOutlinedIcon: ForumOutlinedIcon,
  DescriptionOutlinedIcon: DescriptionOutlinedIcon,
  GridOnOutlinedIcon: GridOnOutlinedIcon,
  TableChartOutlinedIcon: TableChartOutlinedIcon,
  AccountTreeOutlinedIcon: AccountTreeOutlinedIcon,
  CallToActionOutlinedIcon: CallToActionOutlinedIcon,
  NotificationsNoneOutlinedIcon: NotificationsNoneOutlinedIcon,
  AppsOutlinedIcon: AppsOutlinedIcon,
  SmsOutlinedIcon: SmsOutlinedIcon,
  FilterVintageOutlinedIcon: FilterVintageOutlinedIcon,
  FormatColorTextOutlinedIcon: FormatColorTextOutlinedIcon,
  ContactSupportOutlinedIcon: ContactSupportOutlinedIcon,
  LayersOutlinedIcon: LayersOutlinedIcon,
  BlockOutlinedIcon: BlockOutlinedIcon,
  ChromeReaderModeOutlinedIcon: ChromeReaderModeOutlinedIcon,
  FiberManualRecordOutlinedIcon: FiberManualRecordOutlinedIcon,
  EditAttributesOutlinedIcon: EditAttributesOutlinedIcon,
  FaceOutlinedIcon: FaceOutlinedIcon,
  RadioButtonUncheckedOutlinedIcon: RadioButtonUncheckedOutlinedIcon,
  QuestionAnswerOutlinedIcon: QuestionAnswerOutlinedIcon,
  AccountCircleOutlinedIcon: AccountCircleOutlinedIcon,
  ShoppingCartOutlinedIcon: ShoppingCartOutlinedIcon,
  MailOutlineRoundedIcon: MailOutlineRoundedIcon,
  SpeakerNotesOutlinedIcon: SpeakerNotesOutlinedIcon,
  CardGiftcardOutlinedIcon: CardGiftcardOutlinedIcon,
  ErrorOutlineRoundedIcon: ErrorOutlineRoundedIcon,
  HourglassEmptyRoundedIcon: HourglassEmptyRoundedIcon,
  MonetizationOnOutlinedIcon: MonetizationOnOutlinedIcon,
  AssignmentIndOutlinedIcon: AssignmentIndOutlinedIcon,
  SecurityOutlinedIcon: SecurityOutlinedIcon,
  HelpOutlineOutlinedIcon: HelpOutlineOutlinedIcon,
  TranslateIcon: TranslateIcon,
  FormatListNumberedRtlIcon: FormatListNumberedRtlIcon,
  EventNoteIcon: EventNoteIcon
};

// ==============================|| MENU ITEMS ||============================== //


// eslint-disable-next-line
export default {
  items: [
    {
      id: 'navigation',
      title: 'CableMan',
      caption: 'Version 1.0',
      type: 'group',
      icon: icons['NavigationOutlinedIcon'],
      children: [    
        {
          id: 'dashboard',
          title: <FormattedMessage id="dashboard" />,
          type: 'item',
          icon: icons['HomeOutlinedIcon'],
          url: '/'
        },

        // {
        //   id: 'widget',
        //   title: <FormattedMessage id="widget" />,
        //   type: 'collapse',
        //   icon: icons['CardGiftcardOutlinedIcon'],
        //   children: [
        //     {
        //       id: 'statistic',
        //       title: <FormattedMessage id="statistic" />,
        //       type: 'item',
        //       url: '/widget/statistic'
        //     },
        //     {
        //       id: 'data',
        //       title: <FormattedMessage id="data" />,
        //       type: 'item',
        //       url: '/widget/data'
        //     },
        //     {
        //       id: 'chart',
        //       title: <FormattedMessage id="chart" />,
        //       type: 'item',
        //       url: '/widget/chart'
        //     }
        //   ]
        // },
        // {
        //   id: 'rtl',
        //   title: <FormattedMessage id="rtl" />,
        //   type: 'item',
        //   icon: icons['FormatListNumberedRtlIcon'],
        //   url: '/rtl',
        //   target: true
        // }

        {
          id: 'Customer',
          title: <FormattedMessage id="Customer" />,
          type: 'collapse',
          icon: icons['AssignmentIndOutlinedIcon'],
          children: [
            {
              id: 'createcustomer',
              title: <FormattedMessage id="Create Customer" />,
              type: 'item',
              url: '/customers/createcustomer'
            },
            {
              id: 'listcustomer',
              title: <FormattedMessage id="List Customer" />,
              type: 'item',
              url: '/customers/listcustomer'
            },
            // {
            //   id: 'bulkupload',
            //   title: <FormattedMessage id="Bulk Customer Upload" />,
            //   type: 'item',
            //   url: '/application/ecommerce/customerlist'
            // },
            // {
            //   id: 'orderlist',
            //   title: <FormattedMessage id="orderlist" />,
            //   type: 'item',
            //   url: '/application/ecommerce/orderlist'
            // },
            // {
            //   id: 'orderdetails',
            //   title: <FormattedMessage id="orderdetails" />,
            //   type: 'item',
            //   url: '/application/ecommerce/orderdetails'
            // },
            // {
            //   id: 'product',
            //   title: <FormattedMessage id="product" />,
            //   type: 'item',
            //   url: '/application/ecommerce/product'
            // },
            // {
            //   id: 'productreview',
            //   title: <FormattedMessage id="productreview" />,
            //   type: 'item',
            //   url: '/application/ecommerce/productreview'
            // }
          ]
        },
        

      ]
      
    },

    
    {
      id: 'manage',
      
      caption: 'Services',
      type: 'group',
      icon: icons['NavigationOutlinedIcon'],
      children: [     

       


        {
          id: 'Complaint',
          title: <FormattedMessage id="Complaint" />,
          type: 'collapse',
          icon: icons['DvrSharpIcon'],
          children: [
            {
              id: 'Create Complaint',
              title: <FormattedMessage id="Create Complaint" />,
              type: 'item',
              url: '/complaint/createcomplaint'
            },
            {
              id: 'List Complaint',
              title: <FormattedMessage id="List Complaint" />,
              type: 'item',
              url: '/complaint/listcomplaint'
            },

            {
              id: 'complainthistory',
              title: <FormattedMessage id="Complaint History" />,
              type: 'item',
              url: ''
            },
            
          ]
        },

        {
          id: 'Lead',
          title: <FormattedMessage id="Lead" />,
          type: 'collapse',
          icon: icons['CampaignSharpIcon'],
          children: [
       
            {
              id: 'List Lead',
              title: <FormattedMessage id="List Lead" />,
              type: 'item',
              url: '/lead/leadlist'
            },

            {
              id: 'Closed Lead',
              title: <FormattedMessage id="Closed Lead" />,
              type: 'item',
              url: '/lead/closedlead'
            },
            
          ]
        },


        {
          id: 'settings',
          title: <FormattedMessage id="settings" />,
          type: 'collapse',
          icon: icons['SettingsApplicationsIcon'],
          children: [            
            {
              id: 'accountsettings',
              title: <FormattedMessage id="Account Settings" />,
              type: 'item',
              url: '/user/profile'
            },        

            {
              id: 'mastersettings',
              title: <FormattedMessage id="Master Settings" />,
              type: 'item',
              url: '/settings/mastersetting'
            },   
           
           
          ]
        },

   
      
    


    //     {
    //       id: 'ecommerce',
    //       title: <FormattedMessage id="ecommerce" />,
    //       type: 'collapse',
    //       icon: icons['ShoppingCartOutlinedIcon'],
    //       children: [
    //         {
    //           id: 'account',
    //           title: <FormattedMessage id="account" />,
    //           type: 'item',
    //           url: '/application/ecommerce/account'
    //         },
    //         {
    //           id: 'addproduct',
    //           title: <FormattedMessage id="addproduct" />,
    //           type: 'item',
    //           url: '/application/ecommerce/addproduct'
    //         },
    //         {
    //           id: 'customerslist',
    //           title: <FormattedMessage id="customerslist" />,
    //           type: 'item',
    //           url: '/application/ecommerce/customerlist'
    //         },
    //         {
    //           id: 'orderlist',
    //           title: <FormattedMessage id="orderlist" />,
    //           type: 'item',
    //           url: '/application/ecommerce/orderlist'
    //         },
    //         {
    //           id: 'orderdetails',
    //           title: <FormattedMessage id="orderdetails" />,
    //           type: 'item',
    //           url: '/application/ecommerce/orderdetails'
    //         },
    //         {
    //           id: 'product',
    //           title: <FormattedMessage id="product" />,
    //           type: 'item',
    //           url: '/application/ecommerce/product'
    //         },
    //         {
    //           id: 'productreview',
    //           title: <FormattedMessage id="productreview" />,
    //           type: 'item',
    //           url: '/application/ecommerce/productreview'
    //         }
    //       ]
    //     },
    //     {
    //       id: 'contacts',
    //       title: <FormattedMessage id="contacts" />,
    //       type: 'collapse',
    //       icon: icons['AssignmentIndOutlinedIcon'],
    //       children: [
    //         {
    //           id: 'contactlist',
    //           title: <FormattedMessage id="contactlist" />,
    //           type: 'item',
    //           url: '/application/contacts/list'
    //         },
    //         {
    //           id: 'contactcard',
    //           title: <FormattedMessage id="contactcard" />,
    //           type: 'item',
    //           url: '/application/contacts/card'
    //         }
    //       ]
    //     },
    //     {
    //       id: 'mail',
    //       title: <FormattedMessage id="mail" />,
    //       type: 'item',
    //       url: '/application/mail',
    //       icon: icons['MailOutlineRoundedIcon']
    //     },
    //     {
    //       id: 'chat',
    //       title: <FormattedMessage id="chat" />,
    //       type: 'item',
    //       url: '/application/chat',
    //       icon: icons['SpeakerNotesOutlinedIcon']
    //     },
    //     {
    //       id: 'full-calendar',
    //       title: <FormattedMessage id="full-calendar" />,
    //       type: 'item',
    //       url: '/application/full-calendar',
    //       icon: icons['EventNoteIcon']
    //     }
    //   ]
    // },
    // {
    //   id: 'ui-element',
    //   title: <FormattedMessage id="ui-element" />,
    //   caption: 'Material UI Components',
    //   type: 'group',
    //   icon: icons['FormatUnderlinedOutlinedIcon'],
    //   children: [
    //     {
    //       id: 'basic',
    //       title: <FormattedMessage id="basic" />,
    //       type: 'collapse',
    //       icon: icons['GamesOutlinedIcon'],
    //       children: [
    //         {
    //           id: 'accordion',
    //           title: <FormattedMessage id="accordion" />,
    //           type: 'item',
    //           url: '/basic/accordion'
    //         },
    //         {
    //           id: 'avatar',
    //           title: <FormattedMessage id="avatar" />,
    //           type: 'item',
    //           url: '/basic/avatar'
    //         },
    //         {
    //           id: 'badges',
    //           title: <FormattedMessage id="badges" />,
    //           type: 'item',
    //           url: '/basic/badges'
    //         },
    //         {
    //           id: 'breadcrumb',
    //           title: <FormattedMessage id="breadcrumb" />,
    //           type: 'item',
    //           url: '/basic/breadcrumb'
    //         },
    //         {
    //           id: 'cards',
    //           title: <FormattedMessage id="cards" />,
    //           type: 'item',
    //           url: '/basic/cards'
    //         },
    //         {
    //           id: 'chip',
    //           title: <FormattedMessage id="chip" />,
    //           type: 'item',
    //           url: '/basic/chip'
    //         },
    //         {
    //           id: 'list',
    //           title: <FormattedMessage id="list" />,
    //           type: 'item',
    //           url: '/basic/list'
    //         },
    //         {
    //           id: 'tabs',
    //           title: <FormattedMessage id="tabs" />,
    //           type: 'item',
    //           url: '/basic/tabs'
    //         }
    //       ]
    //     },
    //     {
    //       id: 'advance',
    //       title: <FormattedMessage id="advance" />,
    //       type: 'collapse',
    //       icon: icons['LoyaltyOutlinedIcon'],
    //       children: [
    //         {
    //           id: 'alert',
    //           title: <FormattedMessage id="alert" />,
    //           type: 'item',
    //           url: '/advance/alert'
    //         },
    //         {
    //           id: 'dialog',
    //           title: <FormattedMessage id="dialog" />,
    //           type: 'item',
    //           url: '/advance/dialog'
    //         },
    //         {
    //           id: 'pagination',
    //           title: <FormattedMessage id="pagination" />,
    //           type: 'item',
    //           url: '/advance/pagination'
    //         },
    //         {
    //           id: 'progress',
    //           title: <FormattedMessage id="progress" />,
    //           type: 'item',
    //           url: '/advance/progress'
    //         },
    //         {
    //           id: 'rating',
    //           title: <FormattedMessage id="rating" />,
    //           type: 'item',
    //           url: '/advance/rating'
    //         },
    //         {
    //           id: 'snackbar',
    //           title: <FormattedMessage id="snackbar" />,
    //           type: 'item',
    //           url: '/advance/snackbar'
    //         },
    //         {
    //           id: 'speeddial',
    //           title: <FormattedMessage id="speeddial" />,
    //           type: 'item',
    //           url: '/advance/speeddial'
    //         },
    //         {
    //           id: 'timeline',
    //           title: <FormattedMessage id="timeline" />,
    //           type: 'item',
    //           url: '/advance/timeline'
    //         },
    //         {
    //           id: 'toggle-button',
    //           title: <FormattedMessage id="toggle-button" />,
    //           type: 'item',
    //           url: '/advance/toggle-button'
    //         },
    //         {
    //           id: 'treeview',
    //           title: <FormattedMessage id="treeview" />,
    //           type: 'item',
    //           url: '/advance/treeview'
    //         }
    //       ]
    //     }
    //   ]
    // },
    // {
    //   id: 'ui-forms',
    //   title: <FormattedMessage id="ui-forms" />,
    //   type: 'group',
    //   icon: icons['ForumOutlinedIcon'],
    //   children: [
    //     {
    //       id: 'forms',
    //       title: <FormattedMessage id="forms" />,
    //       type: 'collapse',
    //       icon: icons['DescriptionOutlinedIcon'],
    //       children: [
    //         {
    //           id: 'frm-autocomplete',
    //           title: <FormattedMessage id="frm-autocomplete" />,
    //           type: 'item',
    //           url: '/forms/frm-autocomplete'
    //         },
    //         {
    //           id: 'frm-button',
    //           title: <FormattedMessage id="frm-button" />,
    //           type: 'item',
    //           url: '/forms/frm-button'
    //         },
    //         {
    //           id: 'frm-checkbox',
    //           title: <FormattedMessage id="frm-checkbox" />,
    //           type: 'item',
    //           url: '/forms/frm-checkbox'
    //         },
    //         {
    //           id: 'frm-datetime',
    //           title: <FormattedMessage id="frm-datetime" />,
    //           type: 'item',
    //           url: '/forms/frm-datetime'
    //         },
    //         {
    //           id: 'frm-listbox',
    //           title: <FormattedMessage id="frm-listbox" />,
    //           type: 'item',
    //           url: '/forms/frm-listbox'
    //         },
    //         {
    //           id: 'frm-radio',
    //           title: <FormattedMessage id="frm-radio" />,
    //           type: 'item',
    //           url: '/forms/frm-radio'
    //         },
    //         {
    //           id: 'frm-select',
    //           title: <FormattedMessage id="frm-select" />,
    //           type: 'item',
    //           url: '/forms/frm-select'
    //         },
    //         {
    //           id: 'frm-slider',
    //           title: <FormattedMessage id="frm-slider" />,
    //           type: 'item',
    //           url: '/forms/frm-slider'
    //         },
    //         {
    //           id: 'frm-switch',
    //           title: <FormattedMessage id="frm-switch" />,
    //           type: 'item',
    //           url: '/forms/frm-switch'
    //         },
    //         {
    //           id: 'frm-text-field',
    //           title: <FormattedMessage id="frm-text-field" />,
    //           type: 'item',
    //           url: '/forms/frm-text-field'
    //         }
    //       ]
    //     },
    //     {
    //       id: 'tables',
    //       title: <FormattedMessage id="tables" />,
    //       type: 'collapse',
    //       icon: icons['TableChartOutlinedIcon'],
    //       children: [
    //         {
    //           id: 'table-basic',
    //           title: <FormattedMessage id="table-basic" />,
    //           type: 'item',
    //           url: '/tables/table-basic'
    //         },
    //         {
    //           id: 'dense-table',
    //           title: <FormattedMessage id="dense-table" />,
    //           type: 'item',
    //           url: '/tables/dense-table'
    //         },
    //         {
    //           id: 'enhanced-table',
    //           title: <FormattedMessage id="enhanced-table" />,
    //           type: 'item',
    //           url: '/tables/enhanced-table'
    //         },
    //         {
    //           id: 'data-table',
    //           title: <FormattedMessage id="data-table" />,
    //           type: 'item',
    //           url: '/tables/data-table'
    //         },
    //         {
    //           id: 'customized-table',
    //           title: <FormattedMessage id="customized-table" />,
    //           type: 'item',
    //           url: '/tables/customized-table'
    //         },
    //         {
    //           id: 'sticky-header-table',
    //           title: <FormattedMessage id="sticky-header-table" />,
    //           type: 'item',
    //           url: '/tables/sticky-header-table'
    //         },
    //         {
    //           id: 'collapse-table',
    //           title: <FormattedMessage id="collapse-table" />,
    //           type: 'item',
    //           url: '/tables/collapse-table'
    //         }
    //       ]
    //     },
    //     {
    //       id: 'mui-datatables',
    //       title: <FormattedMessage id="mui-datatables" />,
    //       type: 'collapse',
    //       icon: icons['GridOnOutlinedIcon'],
    //       children: [
    //         {
    //           id: 'mui-simple',
    //           title: <FormattedMessage id="mui-simple" />,
    //           type: 'item',
    //           url: '/mui-datatables/mui-simple'
    //         },
    //         {
    //           id: 'mui-column-filters',
    //           title: <FormattedMessage id="mui-column-filters" />,
    //           type: 'item',
    //           url: '/mui-datatables/mui-column-filters'
    //         },
    //         {
    //           id: 'mui-column-options-update',
    //           title: <FormattedMessage id="mui-column-options-update" />,
    //           type: 'item',
    //           url: '/mui-datatables/mui-column-options-update'
    //         },
    //         {
    //           id: 'mui-column-sort',
    //           title: <FormattedMessage id="mui-column-sort" />,
    //           type: 'item',
    //           url: '/mui-datatables/mui-column-sort'
    //         },
    //         {
    //           id: 'mui-component-edit',
    //           title: <FormattedMessage id="mui-component-edit" />,
    //           type: 'item',
    //           url: '/mui-datatables/mui-component-edit'
    //         },
    //         {
    //           id: 'mui-csv-export',
    //           title: <FormattedMessage id="mui-csv-export" />,
    //           type: 'item',
    //           url: '/mui-datatables/mui-csv-export'
    //         },
    //         {
    //           id: 'mui-custom-action-button',
    //           title: <FormattedMessage id="mui-custom-action-button" />,
    //           type: 'item',
    //           url: '/mui-datatables/mui-custom-action-button'
    //         },
    //         {
    //           id: 'mui-custom-components',
    //           title: <FormattedMessage id="mui-custom-components" />,
    //           type: 'item',
    //           url: '/mui-datatables/mui-custom-components'
    //         },
    //         {
    //           id: 'mui-customize-columns',
    //           title: <FormattedMessage id="mui-customize-columns" />,
    //           type: 'item',
    //           url: '/mui-datatables/mui-customize-columns'
    //         },
    //         {
    //           id: 'mui-customize-filter',
    //           title: <FormattedMessage id="mui-customize-filter" />,
    //           type: 'item',
    //           url: '/mui-datatables/mui-customize-filter'
    //         },
    //         {
    //           id: 'mui-draggable-columns',
    //           title: <FormattedMessage id="mui-draggable-columns" />,
    //           type: 'item',
    //           url: '/mui-datatables/mui-draggable-columns'
    //         },
    //         {
    //           id: 'mui-expandable-rows',
    //           title: <FormattedMessage id="mui-expandable-rows" />,
    //           type: 'item',
    //           url: '/mui-datatables/mui-expandable-rows'
    //         },
    //         {
    //           id: 'mui-fixed-header',
    //           title: <FormattedMessage id="mui-fixed-header" />,
    //           type: 'item',
    //           url: '/mui-datatables/mui-fixed-header'
    //         },
    //         {
    //           id: 'mui-resizable-columns',
    //           title: <FormattedMessage id="mui-resizable-columns" />,
    //           type: 'item',
    //           url: '/mui-datatables/mui-resizable-columns'
    //         },
    //         {
    //           id: 'mui-selectable-rows',
    //           title: <FormattedMessage id="mui-selectable-rows" />,
    //           type: 'item',
    //           url: '/mui-datatables/mui-selectable-rows'
    //         }
    //       ]
    //     }
    //   ]
    // },
    // {
    //   id: 'pages',
    //   title: <FormattedMessage id="pages" />,
    //   caption: 'Prebuild Pages',
    //   type: 'group',
    //   icon: icons['NavigationOutlinedIcon'],
    //   children: [
    //     {
    //       id: 'sample-page',
    //       title: <FormattedMessage id="sample-page" />,
    //       type: 'item',
    //       url: '/sample-page',
    //       icon: icons['ChromeReaderModeOutlinedIcon']
    //     },
    //     {
    //       id: 'multi-language',
    //       title: <FormattedMessage id="multi-language" />,
    //       type: 'item',
    //       url: '/multi-language',
    //       icon: icons['TranslateIcon']
    //     },
    //     {
    //       id: 'auth',
    //       title: <FormattedMessage id="auth" />,
    //       type: 'collapse',
    //       icon: icons['SecurityOutlinedIcon'],
    //       children: [
    //         {
    //           id: 'login-1',
    //           title: <FormattedMessage id="login-1" />,
    //           type: 'item',
    //           url: '/application/login',
    //           target: true
    //         },
    //         {
    //           id: 'register',
    //           title: <FormattedMessage id="register" />,
    //           type: 'item',
    //           url: '/application/register',
    //           target: true
    //         },
    //         {
    //           id: 'forget-1',
    //           title: <FormattedMessage id="forget-1" />,
    //           type: 'item',
    //           url: '/application/forgot-password',
    //           target: true
    //         }
    //       ]
    //     },
    //     {
    //       id: 'price',
    //       title: <FormattedMessage id="price" />,
    //       type: 'collapse',
    //       icon: icons['MonetizationOnOutlinedIcon'],
    //       children: [
    //         {
    //           id: 'price1',
    //           title: <FormattedMessage id="price1" />,
    //           type: 'item',
    //           url: '/application/price/price1'
    //         },
    //         {
    //           id: 'price2',
    //           title: <FormattedMessage id="price2" />,
    //           type: 'item',
    //           url: '/application/price/price2'
    //         },
    //         {
    //           id: 'price3',
    //           title: <FormattedMessage id="price3" />,
    //           type: 'item',
    //           url: '/application/price/price3'
    //         }
    //       ]
    //     },
    //     {
    //       id: 'error',
    //       title: <FormattedMessage id="error" />,
    //       type: 'collapse',
    //       icon: icons['ErrorOutlineRoundedIcon'],
    //       children: [
    //         {
    //           id: 'error1',
    //           title: <FormattedMessage id="error1" />,
    //           type: 'item',
    //           url: '/pages/error/error1',
    //           target: true
    //         },
    //         {
    //           id: 'error2',
    //           title: <FormattedMessage id="error2" />,
    //           type: 'item',
    //           url: '/pages/error/error2',
    //           target: true
    //         }
    //       ]
    //     },
    //     {
    //       id: 'comingsoon',
    //       title: <FormattedMessage id="comingsoon" />,
    //       type: 'item',
    //       url: '/pages/comingsoon',
    //       icon: icons['HourglassEmptyRoundedIcon'],
    //       target: true
    //     },
    //     {
    //       id: 'documentation',
    //       title: <FormattedMessage id="documentation" />,
    //       type: 'item',
    //       url: 'https://codedthemes.gitbook.io/materially-react-material-documentation/',
    //       icon: icons['HelpOutlineOutlinedIcon'],
    //       chip: {
    //         label: 'Help?',
    //         color: 'primary'
    //       },
    //       external: true,
    //       target: true
    //     }
    //   ]
    // },
    // {
    //   id: 'utils',
    //   title: <FormattedMessage id="utils" />,
    //   type: 'group',
    //   icon: icons['AccountTreeOutlinedIcon'],
    //   children: [
    //     {
    //       id: 'util-modal',
    //       title: <FormattedMessage id="util-modal" />,
    //       type: 'item',
    //       url: '/utils/util-modal',
    //       icon: icons['CallToActionOutlinedIcon']
    //     },
    //     {
    //       id: 'util-tooltip',
    //       title: <FormattedMessage id="util-tooltip" />,
    //       type: 'item',
    //       url: '/utils/util-tooltip',
    //       icon: icons['QuestionAnswerOutlinedIcon']
    //     },
    //     {
    //       id: 'util-popover',
    //       title: <FormattedMessage id="util-popover" />,
    //       type: 'item',
    //       url: '/utils/util-popover',
    //       icon: icons['NotificationsNoneOutlinedIcon']
    //     },
    //     {
    //       id: 'util-popper',
    //       title: <FormattedMessage id="util-popper" />,
    //       type: 'item',
    //       url: '/utils/util-popper',
    //       icon: icons['SmsOutlinedIcon']
    //     },
    //     {
    //       id: 'util-transitions',
    //       title: <FormattedMessage id="util-transitions" />,
    //       type: 'item',
    //       url: '/utils/util-transitions',
    //       icon: icons['FilterVintageOutlinedIcon']
    //     },
    //     {
    //       id: 'util-icons',
    //       title: <FormattedMessage id="util-icons" />,
    //       type: 'item',
    //       url: 'https://mui.com/material-ui/material-icons/',
    //       icon: icons['AppsOutlinedIcon'],
    //       external: true,
    //       target: true
    //     },
    //     {
    //       id: 'util-typography',
    //       title: <FormattedMessage id="util-typography" />,
    //       type: 'item',
    //       url: '/utils/util-typography',
    //       icon: icons['FormatColorTextOutlinedIcon']
    //     }
    //   ]
    // },
    // {
    //   id: 'support',
    //   title: <FormattedMessage id="support" />,
    //   type: 'group',
    //   icon: icons['ContactSupportOutlinedIcon'],
    //   children: [
    //     {
    //       id: 'menu-level',
    //       title: <FormattedMessage id="menu-level" />,
    //       type: 'collapse',
    //       icon: icons['LayersOutlinedIcon'],
    //       children: [
    //         {
    //           id: 'menu-level-1.1',
    //           title: <FormattedMessage id="menu-level-1.1" />,
    //           type: 'collapse',
    //           children: [
    //             {
    //               id: 'menu-level-2.1',
    //               title: <FormattedMessage id="menu-level-2.1" />,
    //               type: 'collapse',
    //               children: [
    //                 {
    //                   id: 'menu-level-3.1',
    //                   title: <FormattedMessage id="menu-level-3.1" />,
    //                   type: 'collapse',
    //                   children: [
    //                     {
    //                       id: 'menu-level-4.1',
    //                       title: <FormattedMessage id="menu-level-4.1" />,
    //                       type: 'collapse',
    //                       children: [
    //                         {
    //                           id: 'menu-level-5.1',
    //                           title: <FormattedMessage id="menu-level-5.1" />,
    //                           type: 'collapse',
    //                           children: [
    //                             {
    //                               id: 'menu-level-6.1',
    //                               title: <FormattedMessage id="menu-level-6.1" />,
    //                               type: 'collapse',
    //                               children: [
    //                                 {
    //                                   id: 'menu-level-7.1',
    //                                   title: <FormattedMessage id="menu-level-7.1" />,
    //                                   type: 'collapse',
    //                                   children: [
    //                                     {
    //                                       id: 'menu-level-8.1',
    //                                       title: <FormattedMessage id="menu-level-8.1" />,
    //                                       type: 'item',
    //                                       url: '#'
    //                                     }
    //                                   ]
    //                                 }
    //                               ]
    //                             }
    //                           ]
    //                         }
    //                       ]
    //                     }
    //                   ]
    //                 }
    //               ]
    //             }
    //           ]
    //         }
    //       ]
    //     },
    //     {
    //       id: 'menu-level-subtitle',
    //       title: <FormattedMessage id="menu-level-subtitle" />,
    //       caption: 'I am Subtitle',
    //       type: 'collapse',
    //       icon: icons['LayersOutlinedIcon'],
    //       children: [
    //         {
    //           id: 'sub-menu-level-1.1',
    //           title: <FormattedMessage id="sub-menu-level-1.1" />,
    //           caption: 'I am level 1 subtitle',
    //           type: 'collapse',
    //           children: [
    //             {
    //               id: 'sub-menu-level-2.1',
    //               title: <FormattedMessage id="sub-menu-level-2.1" />,
    //               caption: 'I am level 2 subtitle',
    //               type: 'item',
    //               url: '#'
    //             }
    //           ]
    //         }
    //       ]
    //     },
    //     {
    //       id: 'disabled-menu',
    //       title: <FormattedMessage id="disabled-menu" />,
    //       type: 'item',
    //       url: '#',
    //       icon: icons['BlockOutlinedIcon'],
    //       disabled: true
    //     },
    //     {
    //       id: 'oval-chip-menu',
    //       title: <FormattedMessage id="oval-chip-menu" />,
    //       type: 'item',
    //       url: '#',
    //       icon: icons['FiberManualRecordOutlinedIcon'],
    //       chip: {
    //         label: '9',
    //         color: 'primary'
    //       }
    //     },
    //     {
    //       id: 'rounded-chip-menu',
    //       title: <FormattedMessage id="rounded-chip-menu" />,
    //       type: 'item',
    //       url: '#',
    //       icon: icons['EditAttributesOutlinedIcon'],
    //       chip: {
    //         label: 'Rounded',
    //         color: 'secondary'
    //       }
    //     },
    //     {
    //       id: 'avatar-chip-menu',
    //       title: <FormattedMessage id="avatar-chip-menu" />,
    //       type: 'item',
    //       url: '#',
    //       icon: icons['FaceOutlinedIcon'],
    //       chip: {
    //         label: 'Coded',
    //         color: 'primary',
    //         avatar: 'C',
    //         size: 'small'
    //       }
    //     },
    //     {
    //       id: 'outline-chip-menu',
    //       title: <FormattedMessage id="outline-chip-menu" />,
    //       type: 'item',
    //       url: '#',
    //       icon: icons['RadioButtonUncheckedOutlinedIcon'],
    //       chip: {
    //         label: 'Outline',
    //         variant: 'outlined',
    //         color: 'primary'
    //       }
    //     }
       ]
     }
  ]
};

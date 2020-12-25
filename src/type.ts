/*
 * @Description: 类型定义文件
 * @Author: zhanghj
 * @Date: 2020-12-23 10:55:14
 * @LastEditors: zhanghj
 * @LastEditTime: 2020-12-25 09:09:25
 */

 export type PortalProps = React.PropsWithChildren<{
   node?: HTMLElement;
 }>

 export type Position = 'top' | 'right' | 'bottom' | 'left' | 'center';

 export const defaultProps = {
   visible: false,
   position: 'center' as Position,
   mask: true,
   maskClosable: false,
   onClose: () => {},
   destroyOnClose: false,
   wrapClassName: '',
 }

 type PopupPropsWithoutChildren = {
  node?: HTMLElement;
} & typeof defaultProps;

 export type PopupProps = React.PropsWithChildren<PopupPropsWithoutChildren>;


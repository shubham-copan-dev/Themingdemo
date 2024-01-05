import { StyleSheet } from 'react-native';

export const CommonStyles = StyleSheet.create({
  dFlex: {
    display: 'flex',
  },
  flexRow: {
    flexDirection: 'row',
  },
  flexCol: {
    flexDirection: 'column',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  alignCenter: {
    alignItems: 'center',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  flex1:{
    flex:1
  },
  gap:{
    gap:16
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 50,
    overflow:'hidden'
  },
  mb1:{
    marginBottom:16
  },
  mb2:{
    marginBottom:32
  },
  ml1:{
    marginLeft:16
  },
  mt1:{
    marginTop:16
  },
  mr1:{
    marginRight:16
  },
  height100:{
    height:'100%'
  },
  width100:{
    width:'100%'
  },
  cardContainer:{
    backgroundColor:'#FFFFFF',
    padding:16,
    borderRadius:16,
  }
});

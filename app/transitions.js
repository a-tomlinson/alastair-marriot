export default function(){
  this.transition(
    this.fromRoute(['home','biography']),
    this.toRoute(['home','biography']),
    this.use('fade')
  )


  // this.transition(
  //   this.matchSelector('.main-content.is-open'),
  //   this.use('toLeft')
  // )
};

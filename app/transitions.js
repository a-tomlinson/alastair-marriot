export default function(){
  this.transition(
    this.fromRoute(['home','biography']),
    this.toRoute(['home','biography']),
    this.use('fade')
  )
};

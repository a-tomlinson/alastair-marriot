export default function(){
  this.transition(
    this.fromRoute(['home','biography']),
    this.toRoute(['home','biography']),
    this.use('to-down')
  ),

  this.transition(
    this.fromRoute('index'),
    this.toRoute('home'),
    this.use('to-up')
  )
};

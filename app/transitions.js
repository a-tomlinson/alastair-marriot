export default function(){
  this.transition(
    this.fromRoute(['home','biography','galleries']),
    this.toRoute(['home','biography','galleries']),
    this.use('fade')
  );
}

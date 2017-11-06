class Spaceship {
  constructor(name, crew, phasers, shields) {
    this.crew = crew
    this.shields = shields
    this.name = name
    this.cloaked = false
    this.warpDrive = 'disengaged'
    this.phasers = phasers
    this.phasersCharge = 'uncharged'
    if (crew.length > 0){
      this.docked = false
      this.crew.forEach(member => {member.currentShip = this})
    } else {
      this.docked = true
    }
  }
}

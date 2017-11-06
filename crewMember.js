class CrewMember {
  constructor(position) {
    this.currentShip = 'Looking for a Rig'
    this.position = position
  }

  engageWarpDrive(){
    if(this.currentShip === 'Looking for a Rig'){
      return 'had no effect'
    } else if (this.position === 'Pilot') {
      this.currentShip.warpDrive = "engaged!"
    }
  }

  chargePhasers(){
    if (this.position === 'Gunner' && this.currentShip !== "Looking for a Rig"){
      this.currentShip.phasersCharge = 'charged!'
    } else {
      return 'had no effect'
    }
  }

  setsInvisibility(){
    if (this.currentShip === "Looking for a Rig") {
      return 'had no effect'
    } else if (this.position === 'Defender') {
      this.currentShip.cloaked = true
    }
  }
}

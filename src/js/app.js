export function checkhealth(text) {
    if ( text.health > 50) {
        return "healthy"
    } 
    if (text.health > 15 &&  text.health <= 50) {
        return "wounded"
    }
    if (text.health <= 15) {
        return "critical"
    }
        
}
  

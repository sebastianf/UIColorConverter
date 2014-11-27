
function runWithString(hexColor)
{
    hexColor = hexColor.replace(/^#/, '');
    
    var tempHexColor = '000000';
    var alpha = '1.00';
    
    String.prototype.replaceAt=function(index, character) {
        return this.substr(0, index) + character + this.substr(index+character.length);
    }
    
    if (hexColor.length == 1) {
        tempHexColor = tempHexColor.replaceAt(0, hexColor[0]);
        tempHexColor = tempHexColor.replaceAt(1, hexColor[0]);
    }
    
    if (hexColor.length == 2) {
        tempHexColor = tempHexColor.replaceAt(0, hexColor[0]);
        tempHexColor = tempHexColor.replaceAt(1, hexColor[0]);
        tempHexColor = tempHexColor.replaceAt(2, hexColor[1]);
        tempHexColor = tempHexColor.replaceAt(3, hexColor[1]);
    }
    
    if (hexColor.length == 3) {
        tempHexColor = hexColor[0] + hexColor[0] + hexColor[1] + hexColor[1] + hexColor[2] + hexColor[2];
    }
    
    if (hexColor.length > 3) {
        for (i=0; i<hexColor.length; i++) {
            if (i<6) {
                tempHexColor = tempHexColor.replaceAt(i, hexColor[i]);
            }
            else if (i < 8) {
                alpha = alpha.replaceAt(0, '0');
                alpha = alpha.replaceAt(i-4, hexColor[i]);
            }
        }
    }
    
    // check for valid hex values
    for (i=0; i<tempHexColor.length; i++) {
      if(isNaN( parseInt(tempHexColor[i], 16) )) {
        return;
      }
    }
        
    var hexInt = parseInt(tempHexColor, 16);
    var r = (hexInt & 0xff0000) >> 16;
    var g = (hexInt & 0x00ff00) >> 8;
    var b = hexInt & 0x0000ff;
    
    r = r/255.0;
    g = g/255.0;
    b = b/255.0;
    
    function round(value, decimals) {
        return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
    }
    
    var resultObjectiveC = '[UIColor colorWithRed:' + round(r, 3) + ' green:' + round(g, 3) + ' blue:' + round(b, 3) + ' alpha:' + alpha + ']';
    
    var resultSwift = 'UIColor(red:' + round(r, 3) + ', green:' + round(g, 3) + ', blue:' + round(b, 3) + ', alpha:' + alpha + ')';
    
    
    var result = [{'title': resultObjectiveC, 'icon' : 'color.png'}, {'title': resultSwift, 'icon' : 'color.png'}];
    
    return result;
}


module.exports = {
	name: 'Dark Colorblind',
	displayName: 'Dark Colorblind',
	theme: {
		background: {
			default: '#0D1117', 	// primary background color
			success: '#1F6FEB', 	// POST request, parameter names
			notice: '#E8F086', 		// SEND button, GET request
			warning: '#A691AE', 	// PUT request
			danger: '#FF4242', 		// DELETE request
			surprise: '#FFC20A', 	// accent (Dashboard link, branch button, add plugin button)
			info: '#58A6FF' 		// OPTIONS AND HEAD request
		},
		foreground: {
			// font colors corresponding with the elements above?
			// there's like 5 minute delay (?) for theme changes so testing is a pain
			default: '#fff', 		// primary font color (white)
			success: '#fff', 		// secondary font color for success background
			notice: '#fff', 		// secondary font color for notice background
			warning: '#fff', 		// secondary font color for warning background
			danger: '#fff', 		// secondary font color for danger background
			surprise: '#000', 		// secondary font color for surprise background
			info: '#000' 			// secondary font color for info background
		},
		styles: {
			dialog: {
				background: {
					default: '#21262D' // modal primary background color
				},
				foreground: {
					default: '#000'
				}
			}
		}
	}
}

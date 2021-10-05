module.exports = {
	name: 'Dark Colorblind',
	displayName: 'Dark Colorblind',
	theme: {
		background: {
			default:    '#21262D', 	// primary background color
			success:    '#1F6FEB', 	// POST request, 200 OK, parameter names
			notice:     '#E8F086', 	// SEND button, GET request
			warning:    '#A691AE', 	// PUT request
			danger:     '#FF4242', 	// DELETE request
			surprise:   '#FFC20A', 	// accent (Dashboard link, branch button, add plugin button)
			info:       '#58A6FF' 	// OPTIONS AND HEAD request
		},
		foreground: {
			// font colors corresponding with the elements above?
			default:     '#fff',    // primary font color (white)
			success:     '#fff', 	// secondary font color for success background
			notice:      '#000', 	// secondary font color for notice background
			warning:     '#fff', 	// secondary font color for warning background
			danger:      '#fff', 	// secondary font color for danger background
			surprise:    '#000', 	// secondary font color for surprise background
			info:        '#000' 	// secondary font color for info background
		},
		styles: {
			appHeader: {
				foreground: {
					surprise:   '#000'      // branch button font color? (black)
				}
			},
			paneHeader: {
				foreground: {
					default:    '#fff', 	// primary Editor Mode font color (white)
					surprise:   '#000', 	// accent font color
					info:       '#000' 		// response font color
				}
			},
			dialog: {
				background: {
					default:    '#2E4052' 	// modal primary background color
				},
				foreground: {
					default:    '#fff' 	    // primary font color for modals
				}
			}
		}
	}
}

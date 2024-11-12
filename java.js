// Data for drives
const drivesData = {
    2024: {
        January: [
            {
                title: "Surplus Food Drive",
                location: "Railway Station",
                smilesServed: "350+",
                date: "21 Jan 2024",
                description: "Transforming Republic Day into a mission for a hunger-free nation – nourishing the needy, eliminating food waste. 🇮🇳🍲"
            },
            {
                title: "Late-night Surplus Food Drive",
                location: "Railway Station",
                smilesServed: "300+",
                date: "26 Jan 2024",
                description: "Serving the needy even late at night!"
            }
        ],
        February: [
            {
                title: "Surplus Food Drive",
                location: "Cidco Bus Stand",
                smilesServed: "40+",
                date: "1 Feb 2024",
                description: "Served food to many people at Cidco Bus Stand."
            }
        ],
        March: [
            {
                title: "Surplus Food Drive",
                location: "Railway Station",
                smilesServed: "200+",
                date: "14 Mar 2024",
                description: "Always ready to serve the needy, whether it's day or night."
            },
            {
                title: "Surplus Food Drive",
                smilesServed: "350+",
                Location: "Railway Station",
                date:"21 Mar 2024",
                description: "Served food to many people at Railway Station"
            }
        ],
        April:[
            {
                title:"𝐅𝐫𝐞𝐬𝐡𝐥𝐲 𝐂𝐨𝐨𝐤𝐞𝐝 𝐊𝐡𝐢𝐜𝐡𝐚𝐝𝐢 𝐃𝐫𝐢𝐯𝐞 𝐂𝐨𝐦𝐩𝐥𝐞𝐭𝐞𝐝",  
                smilesServed:"800",
                location:"1.𝐆𝐡𝐚𝐭𝐢 𝐇𝐨𝐬𝐩𝐢𝐭𝐚𝐥 & 𝟐) 𝐍𝐢𝐬𝐡𝐚𝐧𝐭 𝐏𝐚𝐫𝐤 𝐂𝐥𝐮𝐬𝐭𝐞𝐫.",
                date:"7 Apr 2024",
                description:"𝐓𝐰𝐨 𝐟𝐨𝐨𝐝 𝐝𝐫𝐢𝐯𝐞𝐬 𝐨𝐟 𝐟𝐫𝐞𝐬𝐡𝐥𝐲 𝐜𝐨𝐨𝐤𝐞𝐝 𝐤𝐡𝐢𝐜𝐡𝐚𝐝𝐢 𝐰𝐞𝐫𝐞 𝐜𝐨𝐦𝐩𝐥𝐞𝐭𝐞𝐝 𝐬𝐢𝐦𝐮𝐥𝐭𝐚𝐧𝐞𝐨𝐮𝐬𝐥𝐲"
            }
        ],
        // Add more months and drives data as needed
    },
    // You can add data for other years similarly.
};

// Function to update the month dropdown based on year selection
function updateMonthDropdown() {
    const year = document.getElementById('year').value;
    const monthSelect = document.getElementById('month');
    const monthLabel = document.getElementById('monthLabel');
    
    if (year) {
        monthLabel.style.display = 'block';
        monthSelect.style.display = 'inline-block';
    } else {
        monthLabel.style.display = 'none';
        monthSelect.style.display = 'none';
    }
    
    // Reset the drive content area
    document.getElementById('drive-details').style.display = 'none';
    document.getElementById('driveContent').innerHTML = '';
}

// Function to display the selected month's drive data
function displayDriveData() {
    const year = document.getElementById('year').value;
    const month = document.getElementById('month').value;
    
    if (!year || !month) return;
    
    // Get the relevant drives data
    const drives = drivesData[year] && drivesData[year][month];
    
    if (drives && drives.length > 0) {
        let driveContent = '';
        
        drives.forEach(drive => {
            driveContent += `
                <div class="drive-item">
                    <h4>${drive.title}</h4>
                    <p><strong>Location:</strong> ${drive.location}</p>
                    <p><strong>Smiles Served:</strong> ${drive.smilesServed}</p>
                    <p><strong>Date:</strong> ${drive.date}</p>
                    <p><strong>Description:</strong> ${drive.description}</p>
                </div>
            `;
        });
        
        document.getElementById('driveContent').innerHTML = driveContent;
        document.getElementById('drive-details').style.display = 'block';
    } else {
        document.getElementById('driveContent').innerHTML = '<p>No drives available for this month.</p>';
        document.getElementById('drive-details').style.display = 'block';
    }
}

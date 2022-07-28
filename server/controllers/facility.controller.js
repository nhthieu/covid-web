const Facility = require("../models/Facility");
// Create facility
exports.createFacility = async(req, res) => {
    const facility = new Facility({
        name: req.body.name,
        capacity: req.body.capacity,
        current_count: 0,
        location: {
            formattedAddress: `Phuong ${req.body.ward}, Quan ${req.body.district}, TP ${req.body.province}`,
            province: req.body.province,
            district: req.body.district,
            ward: req.body.ward
        }
    });
    if (req.body.current_count) {
        facility.current_count = req.body.current_count;
    }
    try {
        await facility.save();
        res.status(200).send({ message: "Facility created successfully" });
    } catch (err) {
        res.status(400).send({ message: err.message });
    }
}

// Update facility's information
exports.updateFacility = async(req, res) => {
    try {
        const facility = await Facility.findOne({ _id: req.params.id });
        if (!facility) {
            return res
                .status(400)
                .send({ message: "Facility not found in the database" });
        } else {
            if (req.body.name) {
                facility.name = req.body.name;
            }
            if (req.body.capacity) {
                facility.capacity = req.body.capacity;
            }
            if (req.body.current_count != null) {
                facility.current_count = req.body.current_count;
            }
            if (req.body.province) {
                facility.location.province = req.body.province;
            }
            if (req.body.district) {
                facility.location.district = req.body.district;
            }
            if (req.body.ward) {
                facility.location.ward = req.body.ward;
            }
            await facility.save();
            res.status(200).send({ message: "Facility updated successfully" });
        }
    } catch (err) {
        res.status(400).send({ message: err.message });
    }
}
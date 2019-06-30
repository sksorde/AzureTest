var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var schema = mongoose.Schema;

mongoosePaginate.paginate.options = {
    lean: true,
    limit: 2
};
const autoIncrementModelID = require('./counter');
/*
function getValueForNextSequence(sequenceOfName) {
    var sequenceDoc = db.incCounter.findAndModify({
        query:{ _id: sequenceOfName },
        update: { $inc: { sequence_value: 1 } },
               new: true
    });
    return sequenceDoc.sequence_value;
 }
 */
const incDetailSchema = new schema({    
    comments: String,
    updatedby: String,
    updated: { type: Date, default: Date.now },
})

var incidentSchema = new schema({
    id: { type: Number, unique: true, min: 1 },
    sort: { type: String },
    created: { type: Date, default: Date.now },
    createdby: String,
    workingteam: String,
    status: String,
    responsibleteam: String,
    reason: String,
    priority: String,
    raisedby: String,
	area: String,
    casewoker: String,
    contactnum: String,
    teamleader: String,
    location: String,
    team: String,
    workgroup: String,
    g7: String,
    archieved: String,
    comp_area: String,
    subarea: String,
    func_area: String,
    srnumber: String,
	srstatus: String,
    srsubstatus: String,
    mastcasenum: String,
	casenum: String,
    pp_nino: String,
    pp_name: String,
    rp_nino: String,
    rp_name: String,
    bicc_dashboard: String,
    bicc_subj_area: String,
    bicc_rpt_name: String,
    bicc_rpt_num: String,
    bicc_folder_name: String,
    bicc_rpt_col: String,
    bicc_col_name: String,
    case_affected: String,
	ser: String,
    set: String,
    case_progress_affected: Boolean,
    pay_affected: Boolean,
    reputation_risk: Boolean,
    bginfo: String,
	error_msg: String,
    procedural_path: String,    
    other_info: String,
    otherupdates: [],
    updated_at: { type: Date, default: Date.now },
    updates: [incDetailSchema]
});

/*
incidentSchema.pre('save', function (next) {
    var doc = this;
    counter.findByIdAndUpdate({ _id: 'entityId' }, { $inc: { seq: 1 } }, { new: true, upsert: true }).then(function (count) {
        console.log("...count: " + JSON.stringify(count));
        doc.sort = count.seq;
        next();
    })
        .catch(function (error) {
            console.error("counter error-> : " + error);
            throw error;
        });
});
*/

incidentSchema.pre('save', function (next) {
    if (!this.isNew) {
        next();
        return;
    }

    autoIncrementModelID('incident', this, next);
});

incidentSchema.plugin(mongoosePaginate);

var incident = mongoose.model('incident', incidentSchema, 'incident');
module.exports = incident;


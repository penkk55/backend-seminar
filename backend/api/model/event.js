const model = {};
module.exports = model;

model.allData = async ({ postgress }, res) => postgress('event');
model.allData1 = async ({ postgress }, res) => postgress('event').where({ id: 1 });
model.allData2 = async ({ postgress }, res) => postgress('event').where({ title: 'trading_forex' });

/**
* @param { import("knex").Knex } postgress1
* @returns { Promise<void> }
*/
model.join_visitorList_1 = async ({ postgress }, postgress1) => {
  postgress1 = postgress;
  return await postgress1.raw(`SELECT 
	e.description event_des,
	et.name event_type_name,
	e.event_start_date,
	e.event_status,
	e.event_end_date,
	h.name host_name,
	sk.name speaker_name,
	vg.name visitor_froup_name,
	ads.street_address_1 ,
	cty.name country,
	ct.name city,
	dt.name district,
	ts.name township,
	wu.name web_name,
	wu.url 

	

 FROM event e 
INNER JOIN	host h ON h.id =e.host_id
INNER JOIN speaker sk ON sk.id = e.speaker_id
INNER JOIN visitor_group vg ON vg.id =e.visitor_group_id

INNER JOIN web_url wu ON wu.id =e.web_url_id
INNER JOIN event_type et ON et.id =e.event_type_id
INNER JOIN address ads ON ads.id = e.address_id
INNER JOIN country cty ON cty.id = ads.country_id
INNER JOIN city ct ON ct.id = ads.city_id
INNER JOIN district dt ON dt.id = ads.district_id
INNER JOIN township ts ON ts.id = ads.township_id

WHERE et.name = 'application'
`).then((d) => d.rows);
};

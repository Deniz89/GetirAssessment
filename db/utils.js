module.exports = {
  queryBuilder: {
    fetchRecords: (params) => {
      // Check all parameters, then create match query
      const {startDate, endDate, minCount, maxCount} = params

      let $match = {$and: []}

      if(startDate || endDate) {
        let dateQuery = {
          createdAt: {}
        }

        if(startDate) 
          dateQuery.createdAt.$gt = new Date(startDate)

        if(endDate)
          dateQuery.createdAt.$lt = new Date(endDate)

        $match.$and.push(dateQuery)
      }

      if(minCount || maxCount) {
        let countQuery = {
          totalCount: {}
        }

        if(minCount)
          countQuery.totalCount.$gt = parseInt(minCount)
  
        if(maxCount)
          countQuery.totalCount.$lt = parseInt(maxCount)
    
        $match.$and.push(countQuery)
      }

      return $match
    }
  }
}
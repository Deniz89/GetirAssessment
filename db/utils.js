module.exports = {
  queryBuilder: {
    fetchRecords: (params) => {
      const {startDate, endDate, minCount, maxCount} = params

      // prepare match statement
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
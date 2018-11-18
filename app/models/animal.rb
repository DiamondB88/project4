class Animal
    # ==================================================
    #                      SET UP
    # ==================================================

    # add attribute readers for instance access
    attr_reader :id, :title, :image, :description

    # connect to postgres
    if(ENV['DATABASE_URL'])
         uri = URI.parse(ENV['DATABASE_URL'])
         DB = PG.connect(uri.hostname, uri.port, nil, nil, uri.path[1..-1], uri.user, uri.password)
     else
         DB = PG.connect(host: "localhost", port: 5432, dbname: 'animals_development')
     end

    # initialize options hash
    def initialize(opts = {}, id = nil)
        @id = id.to_i
        @title = opts["title"]
        @image = opts["image"]
        @description = opts["description"]
    end

    # get all
    def self.all
        results = DB.exec("SELECT * FROM animals;")
      return  results.map do |result|
            {
                "id" => result["id"].to_i,
                "title" => result["title"],
                "image" => result["image"],
                "description" => result["description"]
            }
        end
    end

    # get one by id
    def self.find(id)
        result = DB.exec("SELECT * FROM animals WHERE id=#{id};")
      return  {
          "id" => result.first["id"].to_i,
          "title" => result.first["title"],
          "image" => result.first["image"],
          "description" => result.first["description"]
        }
        end

    # create one
    def self.create(opts)
    result = DB.exec(
        <<-SQL
            INSERT INTO animals (title, image, description) VALUES (
              '#{opts["title"]}', '#{opts["image"]}', '#{opts["description"]}')
            RETURNING id, title,image,description;
        SQL
    )
  return  {
        "id" => result.first["id"].to_i,
        "title" => result.first["title"],
        "image" => result.first["image"],
        "description" => result.first["description"]
    }
end

    # delete one (by id)
    def self.delete(id)
        result = DB.exec("DELETE FROM animals WHERE id=#{id};")
        {
            "deleted" => true
        }
    end

    # update one (by id)
    def self.update(id, opts)
       result = DB.exec(
           <<-SQL
               UPDATE animals
               SET title='#{opts["title"]}',
               image='#{opts["image"]}',
               description='#{opts["description"]}'
               WHERE id=#{id}
               RETURNING id, title, image, description;
           SQL
       )
      return {
           "id" => result.first["id"].to_i,
           "title" => result.first["title"],
           "image" => result.first["image"],
           "description" => result.first["description"]
        }
   end
end

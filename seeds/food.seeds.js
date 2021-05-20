require("../db")
const mongoose = require("mongoose")
const challengesModel = require ("../models/Challenge.model")

const challenges = [
  {
    challengeName: "Dairy Free", 
    generalDesc: "Cow’s milk is inarguably the most popular and accessible kind of milk. Unfortunately, it has by far the greatest impact on the environment. Cow’s milk requires nine times as much land and produces three times as much carbon emissions than any non-dairy milk alternative",
    challengeImage: "https://i.ibb.co/XV4F5fG/dairy-free.png",
    category: "Food",
    challengeDay: [
      {
        description: "For today, go out and buy some plant based milk. It can be almond, soy, oat",
        list: ["Water, Almond, Glass"],
        url: String,
        day: 1
      },
      {
        description: "Try adding soy or oat milk to your coffee or tea today. Take it up a notch and blend together espresso, oatmilk, sweetener of choice and ice cubes to make your very own frappucino!",
        list: [String],
        url: String,
        day: 2
      },
      {
        description: "Replace yogurt with non-dairy yogurts made from rice, soy or coconut. Bonus points for topping yogurt with fresh berries and fruits.",
        list: [String],
        url: String,
        day: 3
      },
      {
        description: "Love baking? We got you covered! Replace butter with coconut oil for the added coconut flavor or proportionate amounts of oil ",
        list: [String],
        url: String,
        day: 4
      },
      {
        description: "Inform yourself about dairy free calcium sources. Almonds, Kale, Broccoli are awesome sources of calcium amongst other things.",
        list: [String],
        url: String,
        day: 5
      },
      {
        description: "Going dairy free is good for the environment",
        list: [String],
        url: String,
        day: 6
      },
      {
        description: "Going dairy free is good for the environment",
        list: [String],
        url: String,
        day: 7
      },
      {
        description: "Going dairy free is good for the environment",
        list: [String],
        url: String,
        day: 8
      },
      {
        description: "Going dairy free is good for the environment",
        list: [String],
        url: String,
        day: 9
      },
      {
        description: "Going dairy free is good for the environment",
        list: [String],
        url: String,
        day: 10
      },
      {
        description: "Going dairy free is good for the environment",
        list: [String],
        url: String,
        day: 11
      },
      {
        description: "Going dairy free is good for the environment",
        list: [String],
        url: String,
        day: 12
      },
      {
        description: "Going dairy free is good for the environment",
        list: [String],
        url: String,
        day: 13
      },
      {
        description: "Going dairy free is good for the environment",
        list: [String],
        url: String,
        day: 14
      },
      {
        description: "Going dairy free is good for the environment",
        list: [String],
        url: String,
        day: 15
      },
      {
        description: "Going dairy free is good for the environment",
        list: [String],
        url: String,
        day: 16
      },
      {
        description: "Going dairy free is good for the environment",
        list: [String],
        url: String,
        day: 17
      },
      {
        description: "Going dairy free is good for the environment",
        list: [String],
        url: String,
        day: 18
      },
      {
        description: "Going dairy free is good for the environment",
        list: [String],
        url: String,
        day: 19
      },
      {
        description: "Going dairy free is good for the environment",
        list: [String],
        url: String,
        day: 20
      },
      {
        description: "Going dairy free is good for the environment",
        list: [String],
        url: String,
        day: 21
      },
    ]
  },
  {
    challengeName: "Go vegan", 
    generalDesc: "A global shift to a plant-based diet could reduce mortality and greenhouse gases caused by food production by 10% and 70%, respectively, by 2050. Researchers at the University of Oxford found that cutting meat and dairy products from your diet could reduce an individual's carbon footprint from food by up to 73 per cent.",
    challengeImage: "https://cdn.dribbble.com/users/427368/screenshots/11523001/dribbble.jpg",
    category: "Food",
    challengeDay: [
      {
        description: "Getting to Know the Grocery Store",
        list: ["Water, Almond, Glass"],
        url: String,
        day: 1
      },
      {
        description: "Putting to Rest the Great Protein Myth",
        list: [String],
        url: String,
        day: 2
      },
      {
        description: "Better Baking without Eggs",
        list: [String],
        url: String,
        day: 3
      },
      {
        description: "Skipping the Middle Fish: Getting Omega 3s from the Source",
        list: [String],
        url: String,
        day: 4
      },
      {
        description: "Ways to cook tofu so it doesn't taste like sponge",
        list: [String],
        url: String,
        day: 5
      },
      {
        description: "The vegan challenge",
        list: [String],
        url: String,
        day: 6
      },
      {
        description: "The vegan challenge",
        list: [String],
        url: String,
        day: 7
      },
      {
        description: "The vegan challenge",
        list: [String],
        url: String,
        day: 8
      },
      {
        description: "The vegan challenge",
        list: [String],
        url: String,
        day: 9
      },
      {
        description: "The vegan challenge",
        list: [String],
        url: String,
        day: 10
      },
      {
        description: "The vegan challenge",
        list: [String],
        url: String,
        day: 11
      },
      {
        description: "The vegan challenge",
        list: [String],
        url: String,
        day: 12
      },
      {
        description: "The vegan challenge",
        list: [String],
        url: String,
        day: 13
      },
      {
        description: "The vegan challenge",
        list: [String],
        url: String,
        day: 14
      },
      {
        description: "The vegan challenge",
        list: [String],
        url: String,
        day: 15
      },
      {
        description: "The vegan challenge",
        list: [String],
        url: String,
        day: 16
      },
      {
        description: "The vegan challenge",
        list: [String],
        url: String,
        day: 17
      },
      {
        description: "The vegan challenge",
        list: [String],
        url: String,
        day: 18
      },
      {
        description: "The vegan challenge",
        list: [String],
        url: String,
        day: 19
      },
      {
        description: "The vegan challenge",
        list: [String],
        url: String,
        day: 20
      },
      {
        description: "The vegan challenge",
        list: [String],
        url: String,
        day: 21
      },
    ]
  },

  {
    challengeName: "Reduce food waste", 
    generalDesc: "The United Nations estimates that one in nine people in the world do not have access to sufficient food to lead a healthy life. More people are reported to die from hunger every day than AIDS, malaria and tuberculosis combined. But at the same time, nearly one-third of the food that is produced in the world is lost or wasted due to one reason or the other. Food wastage, which includes both food loss and food waste, is not only morally irresponsible, but also causes huge economical losses as well as severe damage to the world around us",
    challengeImage: "https://media.istockphoto.com/vectors/reusable-grocery-eco-bag-with-vegetables-hand-drawn-vector-id1149453752?k=6&m=1149453752&s=612x612&w=0&h=AM3R23OkCTv86dYq5IiR7T2ousvYyLJwCaNKi8YJKmU=",
    category: "Food",
    challengeDay: [
      {
        description: "Learn to preserve fruits and vegetables. Whether that is dehydrating, freezing, pickling in vinegar, or immersing in olive oil, all are better than throwing your food away!Check out this blog post to learn ways of preserving fruis=ts and veggies",
        list: [String],
        url: "https://commonsensehome.com/home-food-preservation/",
        day: 1
      },
      {
        description: "Buy ugly produce. Our high standards for what fruit and vegetables should look like leaves retailers with rigid quality specifications, thus rejecting a lot of produce that comes their way",
        list: [String],
        url: String,
        day: 2
      },
      {
        description: "Declutter your fridge. By keeping an organized fridge you’re much more likely to see your food and eat it! Find ways to organize your frige in this post.",
        list: [String],
        url: "https://www.thekitchn.com/the-best-way-to-organize-your-fridge-tips-from-the-kitchn-48286",
        day: 3
      },
      {
        description: "Save stems, ends and peels of fruits and vegetables for smoothies. They can actually be some of the more nutrient and fiber-rich portions of our produce.",
        list: [String],
        url: String,
        day: 4
      },
      {
        description: "Use tops, stalks, and peels for a homemade stock. Kitchen scraps may not be your favorite to eat as-is, but when put into a stock they can provide a lot of flavor and nutrients!",
        list: [String],
        url: String,
        day: 5
      },
      {
        description: "Use fruit peels to flavor your water. Oranges are known as one of the most flavorful fruits to drink, but have you thought of just putting the peel in their drink?",
        list: [String],
        url: String,
        day: 6
      },
      {
        description: "Compost leftover food to feed plants",
        list: [String],
        url: String,
        day: 7
      },
      {
        description: "Use coffee grounds as a fertilizer for your plants",
        list: [String],
        url: String,
        day: 8
      },
      {
        description: " Take stock of your near-expiration items. Make a plan for what to do with them",
        list: [String],
        url: String,
        day: 9
      },
      {
        description: "Write down everything you throw away in a day. By keeping a log of what food you throw away, you can then have a starting point in finding alternative uses for those food items. ",
        list: [String],
        url: String,
        day: 10
      },
      {
        description: "Avocados are like magic for the skin with vitamins A, D, E, and B-6. Making skincare products out of avocado instead of tossing them in the trash is a completely natural way to make your skin glow",
        list: [String],
        url: String,
        day: 11
      },
      {
        description: "Freezing the leftovers you don’t have time to get around to is an easy way to cut your waste and have some dishes ready for you when you don’t feel like cooking in the future!",
        list: [String],
        url: String,
        day: 12
      },
      {
        description: "Learning how to use these drawers properly can save you a surprising amount of money and keep you from having to find something to do with that brown lettuce you never get around to eating.",
        list: [String],
        url: String,
        day: 13
      },
      {
        description: "By keeping an organized fridge you’re much more likely to see your food and eat it! ",
        list: [String],
        url: String,
        day: 14
      },
      {
        description: "Use a smaller plate to serve dinner to prevent overeating",
        list: [String],
        url: String,
        day: 15
      },
      {
        description: "Take stock of your near-expiration items. Make a plan for what to do with them",
        list: [String],
        url: String,
        day: 16
      },
      {
        description: "Have one dinner dedicated to only leftovers. Bring out your creativity!",
        list: [String],
        url: String,
        day: 17
      },
      {
        description: "Put your dry foods in a container so they don’t go stale",
        list: [String],
        url: String,
        day: 18
      },
      {
        description: "Use the top shelf in the fridge as a high priority shelf for things to be eaten in the next few days",
        list: [String],
        url: String,
        day: 19
      },
      {
        description: "Make fried rice with extra vegetable bits",
        list: [String],
        url: String,
        day: 20
      },
      {
        description: "Hold off your next grocery trip by 3 days and use the food you already have",
        list: [String],
        url: String,
        day: 21
      },
    ]
  },
  {
    challengeName: "Happy veggies", 
    generalDesc: "If we really want to reduce the human impact on the environment, the simplest and cheapest thing anyone can do is to eat less meat. Behind most of the joints of beef or chicken on our plates is a phenomenally wasteful, land- and energy-hungry system of farming that devastates forests, pollutes oceans, rivers, seas and air, depends on oil and coal, and is significantly responsible for climate change. ",
    challengeImage: "https://image.freepik.com/free-vector/cute-funny-happy-vegetables-fruits_1270-440.jpg",
    category: "Food",
    challengeDay: [
      {
        description: "Try a new vegetable today. Whether it is frozen, fresh or canned, work a new vegetable on to your plate today. Try working a vegetable into a stir-fry, salad or soup.",
        list: ["Water, Almond, Glass"],
        url: String,
        day: 1
      },
      {
        description: "Revive wilted greens.Simply place your greens in ice water for 15 to 30 minutes, pat dry and enjoy.",
        list: [String],
        url: String,
        day: 2
      },
      {
        description: "Craving the meaty texture? Cauliflower is a beloved plant-based swap for hearty-tasting recipes without the meat.",
        list: [String],
        url: String,
        day: 3
      },
      {
        description: "Try a new fruit. Just like with vegetables, fruits are a healthy option whether they’re canned, frozen, dried or fresh (just look for options without added sugar).",
        list: [String],
        url: String,
        day: 4
      },
      {
        description: "Learn to love beans.They come in many flavors, shapes and sizes and can be swapped in to make recipes that would originally call for meat. ",
        list: [String],
        url: String,
        day: 5
      },
      {
        description: "There are so many meat substitutes and plant-based proteins to choose from. Try soy products, like tofu and tempeh, for stir-fries, salads and more. ",
        list: [String],
        url: String,
        day: 6
      },
      {
        description: "Smoothies are a great way to boost your veggie intake.",
        list: [String],
        url: String,
        day: 7
      },
      {
        description: "As spring turns to summer, gardening season is in full swing. Try planting your own herb basket ",
        list: [String],
        url: String,
        day: 8
      },
      {
        description: "An easy way to boost the fiber, nutrition and protein you get in a day is to choose whole grains when you can.",
        list: [String],
        url: String,
        day: 9
      },
      {
        description: "Mushrooms might be the “meatiest” tasting vegetable of them all. They are packed with umami flavor and impressive nutrition.",
        list: [String],
        url: String,
        day: 10
      },
      {
        description: "Prep ahead. Making meals and snacks ahead of time can help you be prepared for when hunger hits so you have something healthy and plant-based at the ready. ",
        list: [String],
        url: String,
        day: 11
      },
      {
        description: "Recipes like our Vegetarian Mushroom Stroganoff put a plant-based spin on a comfort food favorite. It is hearty, nutritious and packed with so much flavor you won’t miss the meat.",
        list: [String],
        url: String,
        day: 12
      },
      {
        description: "Making a meal for family or friends is a great way to show how delicious eating a plant-based diet can be. ",
        list: [String],
        url: String,
        day: 13
      },
      {
        description: "Keep lettuce or salad greens on hand to make a simple side salad to pair with meals. Not only will it help you increase your veggie intake, but can also help make your meals more satisfying",
        list: [String],
        url: String,
        day: 14
      },
      {
        description: "Let your slow cooker do the work for this Lentil, Carrot & Potato Soup recipe. This hearty main is full of vegetables and lentils for a filling, nutritious meal.",
        list: [String],
        url: String,
        day: 15
      },
      {
        description: "Try making hummus, bread, salad dressing and more at home instead of choosing store bought.",
        list: [String],
        url: String,
        day: 16
      },
      {
        description: "Try soy products, like tofu and tempeh, for stir-fries, salads and more. There are a variety of plant-based meat substitutes that are available in your grocery store or online.",
        list: [String],
        url: String,
        day: 17
      },
      {
        description: "Try to eat fully plant-based by cutting out any dairy, eggs and animal products today. ",
        list: [String],
        url: String,
        day: 18
      },
      {
        description: "Eating plant-based doesn’t mean giving up sweet treats. Be creative and make your plant based cookies",
        list: [String],
        url: String,
        day: 19
      },
      {
        description: "Visit a local farmers’ market or farm in your area. You can also check out the local produce options at your grocery store. ",
        list: [String],
        url: String,
        day: 20
      },
      {
        description: "Whether it’s at a market, co-op or grocery store, try in-season produce today for peak flavor and nutrition.",
        list: [String],
        url: String,
        day: 21
      },
    ]
  }, 

]



challengesModel.create(challenges)
  .then(()=>{
    mongoose.connection.close()
  })

  .catch((err)=>{
    next(err)
  })

